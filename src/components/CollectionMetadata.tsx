import { useEffect } from "react";
import type { SeoCollection } from "@/data/seo-collections";

export function CollectionMetadata({ page }: { page: SeoCollection }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = page.title;
    const undo: (() => void)[] = [];
    const setMeta = (key: string, value: string, property = false) => {
      const attr = property ? "property" : "name";
      const existing = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      const node = existing ?? document.createElement("meta");
      const previous = node.content;
      node.setAttribute(attr, key);
      node.content = value;
      if (!existing) document.head.appendChild(node);
      undo.push(() => (existing ? (node.content = previous) : node.remove()));
    };
    setMeta("description", page.description);
    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `https://1998.ru${page.path}`, true);
    const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonical = existing ?? document.createElement("link");
    const previousHref = canonical.href;
    canonical.rel = "canonical";
    canonical.href = `https://1998.ru${page.path}`;
    if (!existing) document.head.appendChild(canonical);
    return () => {
      document.title = previousTitle;
      undo.forEach((restore) => restore());
      if (existing) canonical.href = previousHref;
      else canonical.remove();
    };
  }, [page]);
  return null;
}
