export const PRODUCT_LEAD_EMAIL = "info@tecos.spb.ru";

export function validateProductLead(name: string, phone: string) {
  return {
    name:
      name.trim().length < 2 || name.trim().length > 80 ? "Укажите имя — от 2 до 80 символов." : "",
    phone:
      !/^\+?[\d\s()-]+$/.test(phone.trim()) || !/^\d{10,15}$/.test(phone.replace(/\D/g, ""))
        ? "Введите телефон с кодом страны или города."
        : "",
  };
}

export async function sendProductLead(
  data: {
    name: string;
    phone: string;
    product: string;
    brand: string;
    url: string;
    consent: boolean;
  },
  request: typeof fetch = fetch,
) {
  const evidence = consentEvidence(data.consent, data.url);
  const response = await request(`https://formsubmit.co/ajax/${PRODUCT_LEAD_EMAIL}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    signal: AbortSignal.timeout(20000),
    body: JSON.stringify({
      Имя: data.name.trim(),
      Телефон: data.phone.trim(),
      Товар: data.product,
      Линейка: data.brand,
      ...evidence,
      Источник: "Карточка товара 1998.ru",
      _subject: `Заявка на товар: ${data.product} — 1998.ru`,
      _template: "table",
    }),
  });
  if (!response.ok) throw new Error("Request failed");
  const result = await response.json();
  if (result.success !== true && result.success !== "true") throw new Error("Request not accepted");
}
import { consentEvidence } from "./personal-data.ts";
