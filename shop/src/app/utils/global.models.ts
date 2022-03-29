import { CATEGORY } from "./global.constants";

export interface ProductModel{
  id: number;
  name: string;
  description: string;
  price: number;
  category: CATEGORY;
  isAvailable: boolean;
}

export interface CardItemModel extends  ProductModel{
  quantity: number;
}
