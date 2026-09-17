import { Link } from "react-router-dom";
import { legalLinks } from "@/lib/personal-data";
import "./personal-data.css";

export function LegalFooterLinks() {
  return (
    <nav className="legal-footer-links" aria-label="Персональные данные">
      <p>Персональные данные</p>
      <ul>
        {legalLinks
          .filter((link) => link.path !== "/personal-data-consent")
          .map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
