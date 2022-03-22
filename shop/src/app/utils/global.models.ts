import { CATEGORY } from "./global.constants";

export interface ProductModel{
  id: number;
  name: string;
  description: string;
  price: number;
  category: CATEGORY;
  isAvailable: boolean;
}
