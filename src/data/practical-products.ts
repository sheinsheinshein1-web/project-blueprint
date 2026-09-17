import type { Product } from "./products";
import sourceProducts from "./practical-products.json";

const images = import.meta.glob<string>("../assets/practical-history/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

// Supplied product photos and package labels. Gallery order: product, package, other views.
// Keep existing public IDs for the corrected profile/wavy sponge names.
export const practicalProducts: Omit<Product, "marketplaces">[] = sourceProducts.map((item) => {
  const gallery = item.images.map((_, index) => {
    const image = images[`../assets/practical-history/${item.id}-${index}.webp`];
    if (!image) throw new Error(`Missing practical product image: ${item.id}-${index}`);
    return image;
  });
  return {
    id: item.id,
    title: item.title,
    desc: item.desc,
    category: item.category as "Губки" | "Салфетки",
    brand: "Практичная история",
    image: gallery[0],
    gallery,
    features: item.features.map((text, index) => ({
      text,
      icon: ["package", "layers", "info", "check"][index],
    })),
  };
});
