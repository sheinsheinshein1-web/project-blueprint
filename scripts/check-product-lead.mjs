import assert from "node:assert/strict";
import { sendProductLead, validateProductLead } from "../src/lib/product-lead.ts";
import {
  CONSENT_VERSION,
  consentEvidence,
  hasPersonalDataConsent,
} from "../src/lib/personal-data.ts";

// Inject a fake transport: these checks never send mail or contact FormSubmit.
assert.deepEqual(validateProductLead(" Анна ", "+7 (999) 000-00-00"), { name: "", phone: "" });
assert.ok(validateProductLead(" ", "123").name);
for (const phone of ["123", "+7 letters 9990000000", "1".repeat(16)]) {
  assert.ok(validateProductLead("Анна", phone).phone);
}
const data = {
  name: " Тест ",
  phone: "+7 (000) 000-00-00",
  product: "Губки универсальные",
  brand: "Блестящая история",
  url: "https://1998.ru/product/gubki-universalnye",
  consent: true,
};
for (const success of [true, "true"]) {
  await sendProductLead(data, async (url, options) => {
    assert.equal(url, "https://formsubmit.co/ajax/info@tecos.spb.ru");
    assert.equal(options.method, "POST");
    assert.ok(options.signal instanceof AbortSignal);
    const body = JSON.parse(options.body);
    assert.equal(body["Имя"], "Тест");
    assert.equal(body["Товар"], data.product);
    assert.equal(body["Линейка"], data.brand);
    assert.equal(body["Страница"], data.url);
    assert.equal(body["Редакция согласия"], CONSENT_VERSION);
    assert.equal(body["Текст согласия"], "https://1998.ru/personal-data-consent");
    assert.ok(body["Время согласия (браузер, UTC)"]);
    return Response.json({ success });
  });
}
for (const response of [
  Response.json({ success: false }),
  Response.json({ success: "false" }),
  Response.json({}),
  new Response("Failed", { status: 500 }),
  new Response("not json"),
]) {
  await assert.rejects(sendProductLead(data, async () => response));
}
await assert.rejects(
  sendProductLead(data, async () => {
    throw new Error("Network unavailable");
  }),
);
console.log(
  "PASS product lead: validation, recipient, product context, success, server and network errors (no emails sent)",
);

const consentFields = new FormData();
assert.equal(hasPersonalDataConsent(consentFields), false);
consentFields.set("consent", "on");
assert.equal(hasPersonalDataConsent(consentFields), false);
consentFields.set("consent", CONSENT_VERSION);
assert.equal(hasPersonalDataConsent(consentFields), true);
assert.throws(() => consentEvidence(false, data.url));
assert.equal(consentEvidence(true, `${data.url}?phone=secret#lead`)["Страница"], data.url);
let contacted = false;
await assert.rejects(
  sendProductLead({ ...data, consent: false }, async () => {
    contacted = true;
    return Response.json({ success: true });
  }),
);
assert.equal(contacted, false);
console.log(
  "PASS consent: explicit current-version opt-in, no request without consent, no query/hash in page URL",
);
