import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const routes = ["privacy-policy", "personal-data-policy", "personal-data-consent"];
for (const route of routes) {
  const html = await readFile(resolve(root, `dist/${route}/index.html`), "utf8");
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
  assert.ok(html.includes("4705071791"));
  assert.ok(html.includes("1164704064821"));
  assert.ok(html.includes("info@tecos.spb.ru"));
  assert.ok(!html.includes("Проект для согласования"));
  assert.ok(!html.includes("неподтверждён"));
  assert.ok(!html.includes("проект согласия"));
  assert.ok(html.includes('name="robots" content="noindex, follow"'));
  assert.ok(!html.includes('href="#"'));
  for (const target of routes.slice(0, 2)) assert.ok(html.includes(`href="/${target}"`));
}
const consent = await readFile(resolve(root, "src/components/PersonalDataConsent.tsx"), "utf8");
assert.ok(!/defaultChecked|checked=/.test(consent));
assert.match(consent, /required/);
assert.match(consent, /target="_blank"/);
assert.match(consent, /rel="noopener noreferrer"/);
for (const file of ["src/components/ProductLeadForm.tsx", "src/routes/fulfillment.tsx"]) {
  const text = await readFile(resolve(root, file), "utf8");
  assert.ok(
    text.includes("hasPersonalDataConsent(form") || text.includes("hasPersonalDataConsent(fields)"),
  );
  assert.ok(text.includes("<PersonalDataConsent"));
  assert.ok(!text.includes("Нажимая кнопку, вы соглашаетесь"));
}
console.log(
  "PASS legal documents: rendered routes, operator details, policy links, no internal notes and explicit consent",
);
