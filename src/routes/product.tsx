import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { getProductById, getRelatedProducts } from "@/data/products";


export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.title} — 1998 Блестящая история`;
    }
  }, [product]);

  if (!product) {
    return (
      <section className="relative min-h-screen bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">Товар не найден</h1>
          <Link to="/catalog" className="mt-6 inline-flex items-center gap-2 text-[#4B66D1] hover:underline">
            <ArrowLeft className="h-4 w-4" /> Вернуться в каталог
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  return (
    <section className="relative min-h-screen bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="relative z-10 mx-auto w-full">
        {/* Breadcrumbs */}
        <nav aria-label="Хлебные крошки" className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition-colors hover:text-[#4B66D1]">Главная</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/catalog?category=${encodeURIComponent(product.category)}`} className="transition-colors hover:text-[#4B66D1]">{product.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Main product */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-[oklch(0.93_0.005_260)] p-6 md:p-10">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex gap-3">
              {[product.image].map((src, i) => (
                <button
                  key={i}
                  className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 border-[#4B66D1] bg-[oklch(0.93_0.005_260)] p-2"
                >
                  <img src={src} alt={`${product.title} ${i + 1}`} className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            <ul className="mt-8 space-y-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700 md:text-lg">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4B66D1]" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Where to buy */}
            <div className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Где нас купить</h2>
              <div className="flex flex-wrap items-center gap-4">
              {product.marketplaces.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: m.bg, color: m.text }}
                >
                  {m.name}
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Может заинтересовать</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-all hover:shadow-[0_20px_40px_rgba(20,24,40,0.12)]"
                >
                  <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[oklch(0.93_0.005_260)] p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-extrabold tracking-tight text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
