import img01 from "@/assets/products/01-gubki-universalnye-1.jpg";
import img02 from "@/assets/products/02-gubki-s-aromatom-myaty-1.jpg";
import img03 from "@/assets/products/03-gubki-s-aromatom-kofe-1.jpg";
import img04 from "@/assets/products/04-gubki-delikatnye-1.jpg";
import img05 from "@/assets/products/05-gubki-ergonomichnye-1.jpg";
import img06 from "@/assets/products/06-salfetki-celyuloznye-1.jpg";
import img07 from "@/assets/products/07-salfetki-viskoznye-1.jpg";
import img08 from "@/assets/products/08-stelki-zimnie-s-folgoy-1.jpg";
import img09 from "@/assets/products/09-stelki-lnyanye-universalnye-1.jpg";
import img10 from "@/assets/products/10-stelki-probkovye-letnie-1.jpg";
import img11 from "@/assets/products/11-stelki-kozhanye-klassika-1.jpg";
import img12 from "@/assets/products/12-stelki-sportivnye-dyshaschie-1.jpg";

export type Category = "Все" | "Губки" | "Салфетки" | "Стельки";

export type Marketplace = {
  name: string;
  url: string;
  bg: string;
  text: string;
};

export type Product = {
  id: string;
  title: string;
  desc: string;
  category: Category;
  image: string;
  features: string[];
  marketplaces: Marketplace[];
};

export const categories: Category[] = ["Все", "Губки", "Салфетки", "Стельки"];

export const products: Product[] = [
  {
    id: "gubki-universalnye",
    title: "Губки универсальные",
    desc: "Для повседневной уборки",
    category: "Губки",
    image: img01,
    features: [
      "Плотный поролон для устойчивости к износу",
      "Абразивная сторона удаляет стойкие загрязнения",
      "Подходят для посуды, кухонных поверхностей и раковин",
      "Легко промываются и быстро сохнут",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "gubki-mynta",
    title: "Губки с ароматом мяты",
    desc: "Для свежести и чистоты",
    category: "Губки",
    image: img02,
    features: [
      "Свежий аромат мяты во время уборки",
      "Мягкий абразив не царапает поверхности",
      "Сохраняют приятный запах после мытья",
      "Компактный размер для удобного захвата",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "gubki-kofe",
    title: "Губки с ароматом кофе",
    desc: "Для приятной уборки",
    category: "Губки",
    image: img03,
    features: [
      "Тёплый аромат кофе при мытье посуды",
      "Двухслойная структура для деликатной и глубокой очистки",
      "Не оставляют разводов на поверхностях",
      "Долго сохраняют форму и запах",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "gubki-delikatnye",
    title: "Губки деликатные",
    desc: "Для чувствительных поверхностей",
    category: "Губки",
    image: img04,
    features: [
      "Мягкий поролон без абразива",
      "Безопасны для посуды с антипригарным покрытием",
      "Не оставляют царапин на стекле и керамике",
      "Идеальны для деликатных и нержавеющих поверхностей",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "gubki-ergonomichnye",
    title: "Губки эргономичные",
    desc: "Удобно лежат в руке",
    category: "Губки",
    image: img05,
    features: [
      "Фигурная форма повторяет изгиб ладони",
      "Удобно держать даже при длительной уборке",
      "Двойная текстура для разных типов загрязнений",
      "Прочное крепление абразива к поролону",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "salfetki-celyuloznye",
    title: "Салфетки целлюлозные",
    desc: "Впитывают и не крошатся",
    category: "Салфетки",
    image: img06,
    features: [
      "Высокая впитываемость благодаря целлюлозе",
      "Не крошатся и не оставляют ворсинок",
      "Можно использовать для уборки и вытирания рук",
      "Прочные при намокании, легко отжимаются",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "salfetki-viskoznye",
    title: "Салфетки вискозные",
    desc: "Для повседневной уборки",
    category: "Салфетки",
    image: img07,
    features: [
      "Мягкая вискоза для деликатных поверхностей",
      "Хорошо собирают пыль и влагу",
      "Многоразовые: легко стираются",
      "Большой размер для удобной уборки",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "stelki-zimnie-folga",
    title: "Стельки зимние с фольгой",
    desc: "Для тепла в сильные морозы",
    category: "Стельки",
    image: img08,
    features: [
      "Фольгированный слой отражает тепло ног",
      "Мягкая основа из фетра для комфорта",
      "Сохраняют тепло при минусовых температурах",
      "Универсальный размер: легко подрезаются",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "stelki-lnyanye",
    title: "Стельки льняные универсальные",
    desc: "На каждый день весной и осенью",
    category: "Стельки",
    image: img09,
    features: [
      "Натуральный лён регулирует влажность",
      "Приятны коже и предотвращают запах",
      "Универсальная форма для любой обуви",
      "Долговечны и легко заменяются",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "stelki-probkovye",
    title: "Стельки пробковые летние",
    desc: "Для жары, легкие и дышащие",
    category: "Стельки",
    image: img10,
    features: [
      "Пробковый материал позволяет ногам дышать",
      "Лёгкие и тонкие: не уменьшают объём обуви",
      "Абсорбируют излишки влаги",
      "Идеальны для летней и спортивной обуви",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "stelki-kozhanye",
    title: "Стельки кожаные классика",
    desc: "Для деловой обуви",
    category: "Стельки",
    image: img11,
    features: [
      "Натуральная кожа для деловой обуви",
      "Приятная поверхность и долговечность",
      "Поддерживают комфортный микроклимат",
      "Элегантный вид при использовании",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
  {
    id: "stelki-sportivnye",
    title: "Стельки спортивные дышащие",
    desc: "Для тренировок и спорта",
    category: "Стельки",
    image: img12,
    features: [
      "Дышащая структура для активных нагрузок",
      "Амортизация при ходьбе и беге",
      "Отвод влаги для сухости ног",
      "Усиленная поддержка свода стопы",
    ],
    marketplaces: [
      { name: "WILDBERRIES", url: "https://www.wildberries.ru", bg: "#9b4dca", text: "white" },
      { name: "OZON", url: "https://www.ozon.ru", bg: "#005bff", text: "white" },
      { name: "Яндекс Маркет", url: "https://market.yandex.ru", bg: "#fce000", text: "black" },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  return products.filter((p) => p.category === product.category && p.id !== id).slice(0, limit);
}
