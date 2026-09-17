import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const products = JSON.parse(
  await readFile(resolve(root, "src/data/practical-products.json"), "utf8"),
);
assert.equal(products.length, 17);
assert.equal(new Set(products.map((product) => product.id)).size, 17);
assert.equal(products.filter((product) => product.category === "Губки").length, 11);
assert.equal(products.filter((product) => product.category === "Салфетки").length, 6);
for (const product of products) {
  assert.ok(product.title && product.desc);
  assert.equal(product.features.length, 4);
  assert.ok(product.images.length >= 2);
  assert.ok(!product.images[1].includes("без "), `Package missing: ${product.id}`);
  for (let index = 0; index < product.images.length; index++) {
    const file = resolve(root, `src/assets/practical-history/${product.id}-${index}.webp`);
    const image = await readFile(file);
    assert.equal(image.toString("ascii", 0, 4), "RIFF");
    assert.equal(image.toString("ascii", 8, 12), "WEBP");
    assert.ok((await stat(file)).size < 1_000_000, `Image too large: ${file}`);
  }
  const html = await readFile(
    resolve(root, "dist/brands/praktichnaya-istoriya/index.html"),
    "utf8",
  );
  assert.ok(html.includes(`/product/${product.id}`), `Missing catalog card: ${product.id}`);
  const sitemap = await readFile(resolve(root, "dist/sitemap.xml"), "utf8");
  assert.ok(
    sitemap.includes(`/product/${product.id}</loc>`),
    `Missing sitemap entry: ${product.id}`,
  );
}
assert.match(products.find((p) => p.id === "praktichnaya-universalnye").title, /профильные/);
assert.match(products.find((p) => p.id === "praktichnaya-bolshie").title, /волнистые/);
console.log(
  "PASS Practical history: 17 unique products, 11 sponges + 6 cloths, all galleries, catalog and sitemap",
);
