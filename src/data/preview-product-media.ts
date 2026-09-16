import type { Product } from "./products";
import universalPack from "@/assets/brief-1998/image4.jpeg";
import universal from "@/assets/brief-1998/image5.jpeg";
import delicatePack from "@/assets/brief-1998/image6.jpeg";
import delicate from "@/assets/brief-1998/image7.jpeg";
import coffeePack from "@/assets/brief-1998/image8.jpeg";
import coffee from "@/assets/brief-1998/image9.jpeg";
import mintPack from "@/assets/brief-1998/image10.jpeg";
import mint from "@/assets/brief-1998/image11.jpeg";
import ergonomic from "@/assets/brief-1998/image12.jpeg";
import ergonomicPack from "@/assets/brief-1998/image13.png";
import cellulosePack from "@/assets/brief-1998/image14.jpeg";
import cellulose from "@/assets/brief-1998/image15.png";
import viscosePack from "@/assets/brief-1998/viscose-pack-original.png";
import viscose from "@/assets/brief-1998/image17.png";
import maxiPack from "@/assets/brief-1998/image20.png";
import maxi from "@/assets/brief-1998/image21.png";
import practicalPack from "@/assets/brief-1998/image22.png";
import practical from "@/assets/brief-1998/image23.png";
import bigPack from "@/assets/brief-1998/image24.png";
import big from "@/assets/brief-1998/image25.png";

// Original product photographs from “Сайт 1998.pptx”, slides 2–3.
// Viscose package uses the matching high-resolution original from the supplied materials.
// Preview-only: ordinary routes retain their existing assets.
export const previewProductMedia: Record<string, { image: string; packImage: string }> = {
  "gubki-universalnye": { image: universal, packImage: universalPack },
  "gubki-delikatnye": { image: delicate, packImage: delicatePack },
  "gubki-kofe": { image: coffee, packImage: coffeePack },
  "gubki-mynta": { image: mint, packImage: mintPack },
  "gubki-ergonomichnye": { image: ergonomic, packImage: ergonomicPack },
  "salfetki-celyuloznye": { image: cellulose, packImage: cellulosePack },
  "salfetki-viskoznye": { image: viscose, packImage: viscosePack },
  "praktichnaya-maksi": { image: maxi, packImage: maxiPack },
  "praktichnaya-universalnye": { image: practical, packImage: practicalPack },
  "praktichnaya-bolshie": { image: big, packImage: bigPack },
};

export function withPreviewProductMedia(product: Product): Product {
  const media = previewProductMedia[product.id];
  return media
    ? { ...product, image: media.image, gallery: [media.image, media.packImage] }
    : product;
}
