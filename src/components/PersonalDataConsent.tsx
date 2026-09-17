import { useId } from "react";
import { CONSENT_PATH, CONSENT_VERSION } from "@/lib/personal-data";
import "./personal-data.css";

export default function PersonalDataConsent({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <div className={`personal-data-consent ${className}`}>
      <input id={`${id}-consent`} type="checkbox" name="consent" value={CONSENT_VERSION} required />
      <label htmlFor={`${id}-consent`}>
        Даю согласие на обработку{" "}
        <a
          href={CONSENT_PATH}
          target="_blank"
          rel="noopener noreferrer"
          title="Открыть текст согласия в новой вкладке"
        >
          персональных данных
        </a>
        .
      </label>
    </div>
  );
}
