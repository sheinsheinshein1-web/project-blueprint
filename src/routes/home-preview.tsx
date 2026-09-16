import IndexPage from "./index";
import productComposition from "@/assets/brief-1998/about-product-composition-v2.png";
import "./home-preview.css";

function PreviewAbout() {
  return (
    <section id="about" className="preview-about scroll-mt-20">
      <div className="site-container preview-about__layout">
        <div className="preview-about__copy">
          <p className="preview-about__eyebrow">БОЛЕЕ 25 ЛЕТ ОПЫТА</p>
          <h2>«1998 Блестящая история»</h2>
          <p className="preview-about__intro">
            Бренд российского производителя хозяйственных товаров «ТЕКОС-ИНДУСТРИЯ».
          </p>
          <p className="preview-about__description">
            Он назван в честь года строительства собственного завода в Ленинградской области.
          </p>
        </div>
        <div className="preview-about__products">
          <img
            src={productComposition}
            alt="Композиция продукции 1998: универсальная, мятная и кофейная губки с серыми вискозными салфетками"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default function HomePreview() {
  return <IndexPage className="home-design-preview" about={<PreviewAbout />} />;
}
