import { products } from "@/data/products";
import type { SeoCollection } from "@/data/seo-collections";

export const collectionProducts = (page: SeoCollection) =>
  products.filter((product) =>
    page.kind === "category" ? product.category === page.category : product.brand === page.brand,
  );

export function collectionSchema(page: SeoCollection) {
  const url = `https://1998.ru${page.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    url,
    name: page.heading,
    description: page.description,
    inLanguage: "ru-RU",
    ...(page.brand ? { about: { "@type": "Brand", name: page.brand } } : {}),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://1998.ru/" },
        { "@type": "ListItem", position: 2, name: "Каталог", item: "https://1998.ru/catalog" },
        { "@type": "ListItem", position: 3, name: page.label, item: url },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: collectionProducts(page).length,
      itemListElement: collectionProducts(page).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.title,
        url: `https://1998.ru/product/${product.id}`,
      })),
    },
  };
}
