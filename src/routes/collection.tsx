import { ChevronDown } from "lucide-react";
import type { SeoCollection } from "@/data/seo-collections";
import { collectionSchema } from "@/lib/collection-seo";
import { CollectionMetadata } from "@/components/CollectionMetadata";
import PreviewCatalog from "@/components/PreviewCatalog";
import "./collection.css";

export default function CollectionPage({ page }: { page: SeoCollection }) {
  return (
    <>
      <CollectionMetadata page={page} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema(page)).replace(/</g, "\\u003c"),
        }}
      />
      <PreviewCatalog page={page}>
        <section id="selection" className="catalog-editorial">
          <h2>{page.guideTitle}</h2>
          <p>{page.summary}</p>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </section>
          ))}
        </section>
        <section id="questions" className="catalog-questions">
          <h2>Вопросы и ответы</h2>
          {page.faq.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <ChevronDown
                  className="catalog-question-chevron"
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </PreviewCatalog>
    </>
  );
}
