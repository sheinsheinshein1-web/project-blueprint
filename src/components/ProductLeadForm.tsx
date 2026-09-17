import { useId, useRef, useState, type FormEvent } from "react";
import { PRODUCT_LEAD_EMAIL, sendProductLead, validateProductLead } from "@/lib/product-lead";
import PersonalDataConsent from "./PersonalDataConsent";
import { hasPersonalDataConsent } from "@/lib/personal-data";

export default function ProductLeadForm({
  product,
}: {
  product: { title: string; brand: string };
}) {
  const id = useId();
  const sending = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || status === "sent") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("website")) return;
    if (!hasPersonalDataConsent(fields)) {
      form.querySelector<HTMLInputElement>('[name="consent"]')?.reportValidity();
      return;
    }
    const name = String(fields.get("name") ?? "");
    const phone = String(fields.get("phone") ?? "");
    const nextErrors = validateProductLead(name, phone);
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) {
      form
        .querySelector<HTMLInputElement>(`[name="${nextErrors.name ? "name" : "phone"}"]`)
        ?.focus();
      return;
    }
    sending.current = true;
    setStatus("sending");
    try {
      await sendProductLead({
        name,
        phone,
        product: product.title,
        brand: product.brand,
        url: window.location.href,
        consent: true,
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <div className="product-lead">
      <h2 id={`${id}-title`}>Оставьте заявку</h2>
      <p className="product-lead__intro">Свяжемся с вами и ответим на вопросы о товаре.</p>
      <form onSubmit={submit} aria-labelledby={`${id}-title`} aria-busy={status === "sending"}>
        <input type="text" name="website" hidden tabIndex={-1} autoComplete="off" />
        <fieldset disabled={status === "sending" || status === "sent"}>
          <div className="product-lead__fields">
            <label htmlFor={`${id}-name`}>
              Ваше имя
              <input
                id={`${id}-name`}
                name="name"
                autoComplete="given-name"
                placeholder="Имя"
                required
                maxLength={80}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${id}-name-error` : undefined}
              />
              {errors.name && (
                <span className="product-lead__error" id={`${id}-name-error`}>
                  {errors.name}
                </span>
              )}
            </label>
            <label htmlFor={`${id}-phone`}>
              Телефон
              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+7 999 000-00-00"
                required
                maxLength={24}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
              />
              {errors.phone && (
                <span className="product-lead__error" id={`${id}-phone-error`}>
                  {errors.phone}
                </span>
              )}
            </label>
          </div>
          <PersonalDataConsent />
          <button className="product-lead__submit" type="submit">
            {status === "sending"
              ? "Отправляем…"
              : status === "sent"
                ? "Заявка отправлена"
                : "Отправить заявку"}
          </button>
        </fieldset>
        <div aria-live="polite" role="status">
          {status === "sent" && (
            <p className="product-lead__feedback">
              Спасибо! Мы свяжемся с вами по указанному телефону.
            </p>
          )}
        </div>
        {status === "error" && (
          <p className="product-lead__feedback product-lead__error" role="alert">
            Не удалось отправить заявку. Попробуйте ещё раз или напишите на{" "}
            <a href={`mailto:${PRODUCT_LEAD_EMAIL}`}>{PRODUCT_LEAD_EMAIL}</a>.
          </p>
        )}
      </form>
    </div>
  );
}
