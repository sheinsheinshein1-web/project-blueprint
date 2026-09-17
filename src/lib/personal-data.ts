export const CONSENT_VERSION = "2026-09-17.2";
export const CONSENT_PATH = "/personal-data-consent";
export const CONSENT_TEXT = "Даю согласие на обработку персональных данных";

export const personalDataOperator = {
  name: "ООО «ТЕКОС-ИНДУСТРИЯ»",
  fullName: "Общество с ограниченной ответственностью «ТЕКОС-ИНДУСТРИЯ»",
  inn: "4705071791",
  ogrn: "1164704064821",
  address: "Ленинградская область, гп Дружная Горка, ул. Урицкого, д. 20",
  correspondenceAddress: "Санкт-Петербург, пр. Юрия Гагарина, д. 1, оф. 306",
  email: "info@tecos.spb.ru",
};

export const legalLinks = [
  { path: "/privacy-policy", title: "Политика конфиденциальности" },
  { path: "/personal-data-policy", title: "Политика обработки персональных данных" },
  { path: CONSENT_PATH, title: "Согласие на обработку персональных данных" },
] as const;

export function hasPersonalDataConsent(fields: FormData) {
  return fields.get("consent") === CONSENT_VERSION;
}

export function consentEvidence(accepted: boolean, pageUrl: string) {
  if (accepted !== true) throw new Error("Personal data consent is required");
  const page = new URL(pageUrl);
  return {
    "Согласие на обработку персональных данных": CONSENT_TEXT,
    "Редакция согласия": CONSENT_VERSION,
    "Текст согласия": `https://1998.ru${CONSENT_PATH}`,
    "Время согласия (браузер, UTC)": new Date().toISOString(),
    Страница: `${page.origin}${page.pathname}`,
  };
}
