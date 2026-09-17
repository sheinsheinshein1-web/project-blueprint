import { practicalProducts } from "./practical-products";
import { OZON_STORE_URL } from "@/data/marketplace-links";
import img01 from "@/assets/products/clean/01-gubki-universalnye.png";
import img02 from "@/assets/products/clean/02-gubki-s-aromatom-myaty.png";
import img03 from "@/assets/products/clean/03-gubki-s-aromatom-kofe.png";
import img04 from "@/assets/products/clean/04-gubki-delikatnye.png";
import img05 from "@/assets/products/clean/05-gubki-ergonomichnye.png";
import img06 from "@/assets/products/clean/06-salfetki-celyuloznye.png";
import img07 from "@/assets/products/clean/07-salfetki-viskoznye.png";
import img08 from "@/assets/products/clean/08-stelki-zimnie-s-folgoy.png";
import img09 from "@/assets/products/clean/09-stelki-lnyanye-universalnye.png";
import pack01 from "@/assets/products/clean/01-gubki-universalnye-pack.png";
import pack02 from "@/assets/products/clean/02-gubki-s-aromatom-myaty-pack.png";
import pack03 from "@/assets/products/clean/03-gubki-s-aromatom-kofe-pack.png";
import pack04 from "@/assets/products/clean/04-gubki-delikatnye-pack.png";
import pack05 from "@/assets/products/clean/05-gubki-ergonomichnye-pack.png";
import pack06 from "@/assets/products/clean/06-salfetki-celyuloznye-pack.png";
import pack07 from "@/assets/products/clean/07-salfetki-viskoznye-pack.png";
import pack08 from "@/assets/products/clean/08-stelki-zimnie-s-folgoy-pack.png";
import pack09 from "@/assets/products/clean/09-stelki-lnyanye-universalnye-pack.png";
import materialGubkiUniversalFiber from "@/assets/products/clean/material-gubki-universal-fiber.png";
import materialGubkiUniversalFoam from "@/assets/products/clean/material-gubki-universal-foam.png";
import materialGubkiMintFiber from "@/assets/products/clean/material-gubki-mint-fiber.png";
import materialGubkiMintFoam from "@/assets/products/clean/material-gubki-mint-foam.png";
import materialGubkiCoffeeFiber from "@/assets/products/clean/material-gubki-coffee-fiber.png";
import materialGubkiCoffeeFoam from "@/assets/products/clean/material-gubki-coffee-foam.png";
import materialGubkiDelicateFiber from "@/assets/products/clean/material-gubki-delicate-fiber.png";
import materialGubkiDelicateFoam from "@/assets/products/clean/material-gubki-delicate-foam.png";
import materialGubkiErgonomicFiber from "@/assets/products/clean/material-gubki-ergonomic-fiber.png";
import materialGubkiErgonomicFoam from "@/assets/products/clean/material-gubki-ergonomic-foam.png";
import materialCelyulozaDark from "@/assets/products/clean/material-celyuloza-dark.png";
import materialCelyulozaGray from "@/assets/products/clean/material-celyuloza-gray.png";
import materialCelyulozaLight from "@/assets/products/clean/material-celyuloza-light.png";
import materialViskozaGray from "@/assets/products/clean/material-viskoza-gray.png";
import materialZimaFolga from "@/assets/products/clean/material-zima-folga.png";
import materialZimaSherst from "@/assets/products/clean/material-zima-sherst.png";
import materialLenDemi from "@/assets/products/clean/material-len-demi.png";

export type Category = "Все" | "Губки" | "Салфетки" | "Стельки";
export type Brand = "Блестящая история" | "Практичная история" | "История комфорта";

export type BrandCollection = {
  id: "shine" | "practical" | "comfort";
  title: Brand;
  eyebrow: string;
  usp: string;
};

export type Marketplace = {
  name: string;
  url: string;
  bg: string;
  text: string;
};

const marketplaceStyles = {
  wildberries: { bg: "#9b4dca", text: "white" },
  ozon: { bg: "#005bff", text: "white" },
  yandexMarket: { bg: "#fce000", text: "black" },
} as const;

const yandexSpongeCard =
  "https://m.integration.vs.market.yandex.net/card/gubki-dlya-mytya-posudy-figurnyye-ergonomichnyye-nabor-gubok-kvadrat-10-sht/5718394497";

function createMarketplaces(
  query: string,
  direct: { wildberries?: string; yandexMarket?: string } = {},
): Marketplace[] {
  const encodedQuery = encodeURIComponent(query);

  return [
    {
      name: "WILDBERRIES",
      url:
        direct.wildberries ??
        `https://www.wildberries.ru/catalog/0/search.aspx?search=${encodedQuery}`,
      ...marketplaceStyles.wildberries,
    },
    {
      name: "OZON",
      url: OZON_STORE_URL,
      ...marketplaceStyles.ozon,
    },
    {
      name: "Яндекс Маркет",
      url: direct.yandexMarket ?? `https://market.yandex.ru/search?text=${encodedQuery}`,
      ...marketplaceStyles.yandexMarket,
    },
  ];
}

export type Feature = {
  text: string;
  icon: string;
};

export type Product = {
  id: string;
  title: string;
  desc: string;
  category: Category;
  brand: Brand;
  image: string;
  gallery?: string[];
  features: Feature[];
  marketplaces: Marketplace[];
};

export const categories: Category[] = ["Все", "Губки", "Салфетки", "Стельки"];

export const brandCollections: BrandCollection[] = [
  {
    id: "shine",
    title: "Блестящая история",
    eyebrow: "Для выразительной чистоты",
    usp: "Продуманные формы, материалы и упаковка для ежедневного ухода за домом.",
  },
  {
    id: "practical",
    title: "Практичная история",
    eyebrow: "Для ежедневных задач",
    usp: "Губки и салфетки для кухни, ванной, пола и автомобиля.",
  },
  {
    id: "comfort",
    title: "История комфорта",
    eyebrow: "Для удобства каждый день",
    usp: "Стельки для сезонного тепла, поддержки стопы и комфортной обуви.",
  },
];

export const products: Product[] = [
  {
    id: "gubki-universalnye",
    title: "Губки универсальные",
    desc: "Для повседневной уборки",
    category: "Губки",
    brand: "Блестящая история",
    image: img01,
    gallery: [img01, pack01, materialGubkiUniversalFoam, materialGubkiUniversalFiber],
    features: [
      { text: "Плотный поролон для устойчивости к износу", icon: "shield" },
      { text: "Абразивная сторона удаляет стойкие загрязнения", icon: "sparkles" },
      { text: "Подходят для посуды, кухонных поверхностей и раковин", icon: "utensils" },
      { text: "Легко промываются и быстро сохнут", icon: "droplets" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история губки универсальные", {
      wildberries: "https://www.wildberries.ru/catalog/895985685/detail.aspx",
      yandexMarket: yandexSpongeCard,
    }),
  },
  {
    id: "gubki-mynta",
    title: "Губки с ароматом мяты",
    desc: "Для свежести и чистоты",
    category: "Губки",
    brand: "Блестящая история",
    image: img02,
    gallery: [img02, pack02, materialGubkiMintFoam, materialGubkiMintFiber],
    features: [
      { text: "Свежий аромат мяты во время уборки", icon: "leaf" },
      { text: "Мягкий абразив не царапает поверхности", icon: "hand" },
      { text: "Сохраняют приятный запах после мытья", icon: "wind" },
      { text: "Компактный размер для удобного захвата", icon: "maximize" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история губки с ароматом мяты", {
      wildberries: "https://www.wildberries.ru/catalog/895985682/detail.aspx",
      yandexMarket: yandexSpongeCard,
    }),
  },
  {
    id: "gubki-kofe",
    title: "Губки с ароматом кофе",
    desc: "Для приятной уборки",
    category: "Губки",
    brand: "Блестящая история",
    image: img03,
    gallery: [img03, pack03, materialGubkiCoffeeFoam, materialGubkiCoffeeFiber],
    features: [
      { text: "Тёплый аромат кофе при мытье посуды", icon: "coffee" },
      { text: "Двухслойная структура для деликатной и глубокой очистки", icon: "layers" },
      { text: "Не оставляют разводов на поверхностях", icon: "sparkles" },
      { text: "Долго сохраняют форму и запах", icon: "clock" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история губки с ароматом кофе", {
      wildberries: "https://www.wildberries.ru/catalog/895985686/detail.aspx",
      yandexMarket: yandexSpongeCard,
    }),
  },
  {
    id: "gubki-delikatnye",
    title: "Губки деликатные",
    desc: "Для чувствительных поверхностей",
    category: "Губки",
    brand: "Блестящая история",
    image: img04,
    gallery: [img04, pack04, materialGubkiDelicateFoam, materialGubkiDelicateFiber],
    features: [
      { text: "Мягкий поролон без абразива", icon: "heart" },
      { text: "Безопасны для посуды с антипригарным покрытием", icon: "shield" },
      { text: "Не оставляют царапин на стекле и керамике", icon: "sparkles" },
      { text: "Идеальны для деликатных и нержавеющих поверхностей", icon: "gem" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история губки деликатные", {
      wildberries: "https://www.wildberries.ru/catalog/895985680/detail.aspx",
      yandexMarket: yandexSpongeCard,
    }),
  },
  {
    id: "gubki-ergonomichnye",
    title: "Губки эргономичные",
    desc: "Удобно лежат в руке",
    category: "Губки",
    brand: "Блестящая история",
    image: img05,
    gallery: [img05, pack05, materialGubkiErgonomicFoam, materialGubkiErgonomicFiber],
    features: [
      { text: "Фигурная форма повторяет изгиб ладони", icon: "hand" },
      { text: "Удобно держать даже при длительной уборке", icon: "clock" },
      { text: "Двойная текстура для разных типов загрязнений", icon: "layers" },
      { text: "Прочное крепление абразива к поролону", icon: "anchor" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история губки эргономичные", {
      wildberries: "https://www.wildberries.ru/catalog/895985679/detail.aspx",
      yandexMarket: yandexSpongeCard,
    }),
  },
  {
    id: "salfetki-celyuloznye",
    title: "Салфетки целлюлозные",
    desc: "Впитывают и не крошатся",
    category: "Салфетки",
    brand: "Блестящая история",
    image: img06,
    gallery: [img06, pack06, materialCelyulozaLight, materialCelyulozaGray, materialCelyulozaDark],
    features: [
      { text: "Высокая впитываемость благодаря целлюлозе", icon: "droplets" },
      { text: "Не крошатся и не оставляют ворсинок", icon: "shield" },
      { text: "Можно использовать для уборки и вытирания рук", icon: "hand" },
      { text: "Прочные при намокании, легко отжимаются", icon: "arrow-down" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история салфетки целлюлозные"),
  },
  {
    id: "salfetki-viskoznye",
    title: "Салфетки вискозные",
    desc: "Для повседневной уборки",
    category: "Салфетки",
    brand: "Блестящая история",
    image: img07,
    gallery: [img07, pack07, materialViskozaGray],
    features: [
      { text: "Мягкая вискоза для деликатных поверхностей", icon: "heart" },
      { text: "Хорошо собирают пыль и влагу", icon: "droplets" },
      { text: "Многоразовые: легко стираются", icon: "refresh-cw" },
      { text: "Большой размер для удобной уборки", icon: "maximize" },
    ],
    marketplaces: createMarketplaces("1998 Блестящая история салфетки вискозные"),
  },
  {
    id: "stelki-zimnie-folga",
    title: "Стельки зимние с фольгой",
    desc: "Для тепла в сильные морозы",
    category: "Стельки",
    brand: "История комфорта",
    image: img08,
    gallery: [img08, pack08, materialZimaFolga, materialZimaSherst],
    features: [
      { text: "Фольгированный слой отражает тепло ног", icon: "sun" },
      { text: "Мягкая основа из фетра для комфорта", icon: "heart" },
      { text: "Сохраняют тепло при минусовых температурах", icon: "thermometer" },
      { text: "Универсальный размер: легко подрезаются", icon: "scissors" },
    ],
    marketplaces: createMarketplaces("1998 История комфорта стельки зимние с фольгой"),
  },
  {
    id: "stelki-lnyanye",
    title: "Стельки льняные универсальные",
    desc: "На каждый день весной и осенью",
    category: "Стельки",
    brand: "История комфорта",
    image: img09,
    gallery: [img09, pack09, materialLenDemi],
    features: [
      { text: "Натуральный лён регулирует влажность", icon: "droplets" },
      { text: "Приятны коже и предотвращают запах", icon: "heart" },
      { text: "Универсальная форма для любой обуви", icon: "move" },
      { text: "Долговечны и легко заменяются", icon: "refresh-cw" },
    ],
    marketplaces: createMarketplaces("1998 История комфорта стельки льняные универсальные"),
  },
  ...practicalProducts.map((product) => ({
    ...product,
    marketplaces: createMarketplaces(`1998 Практичная история ${product.title}`),
  })),
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  const sameBrand = products
    .filter((item) => item.brand === product.brand && item.id !== id)
    .sort(
      (a, b) => Number(b.category === product.category) - Number(a.category === product.category),
    );
  const sameCategory = products.filter(
    (item) =>
      item.category === product.category && item.brand !== product.brand && item.id !== product.id,
  );
  return [...sameBrand, ...sameCategory].slice(0, limit);
}
