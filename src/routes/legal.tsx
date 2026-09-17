import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { LegalDocument } from "@/data/legal-documents";
import { legalLinks, personalDataOperator } from "@/lib/personal-data";
import "./legal.css";

export default function LegalPage({ page }: { page: LegalDocument }) {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = `${page.title} — 1998`;
    const description = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    const oldDescription = description?.content;
    if (description) description.content = page.intro;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);
    return () => {
      document.title = oldTitle;
      if (description && oldDescription !== undefined) description.content = oldDescription;
      robots.remove();
    };
  }, [page]);

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link className="legal-back" to="/">
          На главную
        </Link>
        <header>
          <p className="legal-eyebrow">Персональные данные · редакция от 17 сентября 2026</p>
          <h1>{page.title}</h1>
          <p className="legal-intro">{page.intro}</p>
        </header>
        <nav className="legal-nav" aria-label="Документы о персональных данных">
          {legalLinks
            .filter((link) => link.path !== "/personal-data-consent")
            .map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={page.path === link.path ? "page" : undefined}
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <article className="legal-copy">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="legal-contact">
            <h2>Контакт по персональным данным</h2>
            <a href={`mailto:${personalDataOperator.email}`}>{personalDataOperator.email}</a>
            <p>
              {personalDataOperator.name}
              <br />
              ИНН {personalDataOperator.inn} · ОГРН {personalDataOperator.ogrn}
              <br />
              {personalDataOperator.address}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
