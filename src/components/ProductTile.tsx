import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { withPreviewProductMedia } from "@/data/preview-product-media";
import { usePreviewRoutes } from "@/lib/preview-routes";
import "@/routes/commerce.css";

/** The same product-and-package treatment in the catalog and related products. */
export default function ProductTile({
  product: originalProduct,
  related = false,
}: {
  product: Product;
  related?: boolean;
}) {
  const { preview, sitePath } = usePreviewRoutes();
  const product = preview ? withPreviewProductMedia(originalProduct) : originalProduct;
  const packageImage = product.gallery?.[1];
  if (!preview) {
    return (
      <Link
        to={`/product/${product.id}`}
        className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#f1f3f6] shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-shadow hover:shadow-[0_20px_40px_rgba(20,24,40,0.12)] ${related ? "backdrop-blur-md" : "active:scale-[0.99]"}`}
      >
        <div
          className={
            related
              ? "flex h-[200px] items-center justify-center overflow-hidden bg-white p-4"
              : "relative flex h-[260px] items-center justify-center overflow-hidden bg-white p-5 md:h-[300px] md:p-7"
          }
        >
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {!related && packageImage && (
            <div className="absolute bottom-4 left-4 h-24 w-24 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2 shadow-[0_10px_30px_rgba(20,24,40,0.14)]">
              <img
                src={packageImage}
                alt={`Упаковка: ${product.title}`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
        <div
          className={`flex items-center justify-between gap-4 rounded-b-[1.5rem] bg-[#f1f3f6] p-4 ${related ? "" : "min-h-28 md:p-5"}`}
        >
          <div>
            <h3
              className={`text-base font-extrabold tracking-tight text-gray-900 ${related ? "" : "md:text-lg"}`}
            >
              {product.title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {product.desc}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      </Link>
    );
  }
  return (
    <Link to={sitePath(`/product/${product.id}`)} className="product-tile">
      <div className="product-tile__image">
        <img src={product.image} alt={product.title} loading="lazy" />
        {packageImage && (
          <div className="product-tile__pack">
            <img src={packageImage} alt={`Упаковка: ${product.title}`} loading="lazy" />
          </div>
        )}
      </div>
      <div className="product-tile__caption">
        <div>
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
        </div>
        <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
    </Link>
  );
}
