import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { brandCollections, getProductById, getRelatedProducts } from "@/data/products";
import ProductTile from "@/components/ProductTile";
import ProductLeadForm from "@/components/ProductLeadForm";
import { usePreviewRoutes } from "@/lib/preview-routes";
import { withPreviewProductMedia } from "@/data/preview-product-media";

export default function ProductPage() {
  const { preview, sitePath } = usePreviewRoutes();
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => {
    const original = id ? getProductById(id) : undefined;
    if (!original || !preview) return original;
    return withPreviewProductMedia(original);
  }, [id, preview]);

  useEffect(() => {
    if (product) {
      document.title = `${product.title}: 1998`;
      return;
    }
    document.title = "Товар не найден — 1998";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [product]);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    return product.gallery?.length ? product.gallery : [product.image];
  }, [product]);
  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    setSelectedImage(galleryImages[0]);
  }, [galleryImages]);

  if (!product) {
    return (
      <section
        className={
          preview
            ? "commerce-page product-empty"
            : "relative min-h-[100dvh] bg-white px-6 py-16 lg:px-12 lg:py-24"
        }
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">Товар не найден</h1>
          <Link
            to={sitePath("/catalog")}
            className="mt-6 inline-flex items-center gap-2 text-[#4B66D1] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Вернуться в каталог
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const productBrandId =
    brandCollections.find((brand) => brand.title === product.brand)?.id ?? "shine";

  return (
    <section
      className={
        preview
          ? "commerce-page product-page"
          : "relative min-h-[100dvh] bg-[oklch(0.93_0.005_260)] px-6 py-16 lg:px-12 lg:py-24"
      }
    >
      {!preview && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
          }}
        />
      )}
      <div className="site-container relative z-10">
        {/* Breadcrumbs */}
        <nav
          aria-label="Хлебные крошки"
          className={
            preview
              ? "product-breadcrumbs"
              : "mb-8 mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500"
          }
        >
          <Link to={sitePath("/")} className="transition-colors hover:text-[#4B66D1]">
            Главная
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            to={sitePath(`/catalog#brand-${productBrandId}`)}
            className="transition-colors hover:text-[#4B66D1]"
          >
            {product.brand}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Main product */}
        <div
          className={
            preview ? "product-layout" : "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
          }
        >
          {/* Gallery */}
          <div className={preview ? "product-gallery" : "space-y-4"}>
            <div
              className={
                preview
                  ? "product-gallery__stage"
                  : "flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-white p-6 md:p-10 shadow-[0_12px_30px_rgba(20,24,40,0.08)]"
              }
            >
              <img
                src={selectedImage ?? product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div className={preview ? "product-gallery__thumbnails" : "flex flex-wrap gap-3"}>
              {galleryImages.map((src, i) => {
                const isSelected = src === (selectedImage ?? product.image);
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Показать изображение ${i + 1}: ${product.title}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedImage(src)}
                    className={
                      preview
                        ? "product-gallery__thumbnail"
                        : `flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 bg-white/80 p-2 transition-all hover:-translate-y-0.5 hover:bg-white ${isSelected ? "border-[#4B66D1] shadow-[0_8px_20px_rgba(75,102,209,0.18)]" : "border-white/70"}`
                    }
                  >
                    <img
                      src={src}
                      alt={`${product.title} ${i + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className={preview ? "product-info" : "flex flex-col justify-start"}>
            <h1
              className={
                preview
                  ? undefined
                  : "text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
              }
            >
              {product.title}
            </h1>

            <ul className={preview ? "product-features" : "mt-8 space-y-4"}>
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className={
                    preview
                      ? undefined
                      : "flex items-start gap-3 text-base text-gray-700 md:text-lg"
                  }
                >
                  <span
                    className={
                      preview
                        ? "product-feature-icon"
                        : "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4B66D1]/10 text-[#4B66D1]"
                    }
                  >
                    <DynamicIcon
                      name={feature.icon as IconName}
                      size={preview ? 18 : 14}
                      strokeWidth={preview ? 1.75 : 2}
                    />
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <ProductLeadForm key={product.id} product={product} />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className={preview ? "product-related" : "mt-20"}>
            <h2
              className={
                preview
                  ? undefined
                  : "mb-8 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
              }
            >
              Может заинтересовать
            </h2>
            <div
              className={
                preview
                  ? "product-related__grid"
                  : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              }
            >
              {related.map((item) => (
                <ProductTile key={item.id} product={item} related />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
