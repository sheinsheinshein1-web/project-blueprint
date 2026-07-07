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

export type Feature = {
  text: string;
  icon: string;
};

export type Product = {
  id: string;
  title: string;
  desc: string;
  category: Category;
  image: string;
  features: Feature[];
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
      { text: "Плотный поролон для устойчивости к износу", icon: "shield" },
      { text: "Абразивная сторона удаляет стойкие загрязнения", icon: "sparkles" },
      { text: "Подходят для посуды, кухонных поверхностей и раковин", icon: "utensils" },
      { text: "Легко промываются и быстро сохнут", icon: "droplets" },
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
      { text: "Свежий аромат мяты во время уборки", icon: "leaf" },
      { text: "Мягкий абразив не царапает поверхности", icon: "hand" },
      { text: "Сохраняют приятный запах после мытья", icon: "wind" },
      { text: "Компактный размер для удобного захвата", icon: "maximize" },
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
      { text: "Тёплый аромат кофе при мытье посуды", icon: "coffee" },
      { text: "Двухслойная структура для деликатной и глубокой очистки", icon: "layers" },
      { text: "Не оставляют разводов на поверхностях", icon: "sparkles" },
      { text: "Долго сохраняют форму и запах", icon: "clock" },
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
      { text: "Мягкий поролон без абразива", icon: "heart" },
      { text: "Безопасны для посуды с антипригарным покрытием", icon: "shield" },
      { text: "Не оставляют царапин на стекле и керамике", icon: "sparkles" },
      { text: "Идеальны для деликатных и нержавеющих поверхностей", icon: "gem" },
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
      { text: "Фигурная форма повторяет изгиб ладони", icon: "hand" },
      { text: "Удобно держать даже при длительной уборке", icon: "clock" },
      { text: "Двойная текстура для разных типов загрязнений", icon: "layers" },
      { text: "Прочное крепление абразива к поролону", icon: "anchor" },
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
      { text: "Высокая впитываемость благодаря целлюлозе", icon: "droplets" },
      { text: "Не крошатся и не оставляют ворсинок", icon: "shield" },
      { text: "Можно использовать для уборки и вытирания рук", icon: "hand" },
      { text: "Прочные при намокании, легко отжимаются", icon: "arrow-down" },
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
      { text: "Мягкая вискоза для деликатных поверхностей", icon: "heart" },
      { text: "Хорошо собирают пыль и влагу", icon: "droplets" },
      { text: "Многоразовые: легко стираются", icon: "refresh-cw" },
      { text: "Большой размер для удобной уборки", icon: "maximize" },
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
      { text: "Фольгированный слой отражает тепло ног", icon: "sun" },
      { text: "Мягкая основа из фетра для комфорта", icon: "heart" },
      { text: "Сохраняют тепло при минусовых температурах", icon: "thermometer" },
      { text: "Универсальный размер: легко подрезаются", icon: "scissors" },
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
      { text: "Натуральный лён регулирует влажность", icon: "droplets" },
      { text: "Приятны коже и предотвращают запах", icon: "heart" },
      { text: "Универсальная форма для любой обуви", icon: "move" },
      { text: "Долговечны и легко заменяются", icon: "refresh-cw" },
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
      { text: "Пробковый материал позволяет ногам дышать", icon: "wind" },
      { text: "Лёгкие и тонкие: не уменьшают объём обуви", icon: "feather" },
      { text: "Абсорбируют излишки влаги", icon: "droplets" },
      { text: "Идеальны для летней и спортивной обуви", icon: "sun" },
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
      { text: "Натуральная кожа для деловой обуви", icon: "briefcase" },
      { text: "Приятная поверхность и долговечность", icon: "heart" },
      { text: "Поддерживают комфортный микроклимат", icon: "thermometer" },
      { text: "Элегантный вид при использовании", icon: "sparkles" },
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
      { text: "Дышащая структура для активных нагрузок", icon: "wind" },
      { text: "Амортизация при ходьбе и беге", icon: "activity" },
      { text: "Отвод влаги для сухости ног", icon: "droplets" },
      { text: "Усиленная поддержка свода стопы", icon: "shield" },
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
