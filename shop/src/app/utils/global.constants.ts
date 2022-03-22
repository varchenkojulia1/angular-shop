import { ProductModel } from "./global.models";


export enum CATEGORY {
  PHONE, TV, WASHING_MACHINE
}

export const productList: ProductModel[] = [
  {
    id: 123,
    name: 'Iphone 6',
    description: 'phone',
    price: 1000,
    category: CATEGORY.PHONE,
    isAvailable: true
  },
  {
    id: 102,
    name: 'Samsung TV123',
    description: 'television',
    price: 3000,
    category: CATEGORY.TV,
    isAvailable: true
  },
  {
    id: 101,
    name: 'Samsung WM123',
    description: 'washing machine',
    price: 1500,
    category: CATEGORY.WASHING_MACHINE,
    isAvailable: true
  }
]

export const cartList: ProductModel[] = [
  {
    id: 123,
    name: 'Iphone 6',
    description: 'phone',
    price: 1000,
    category: CATEGORY.PHONE,
    isAvailable: true
  }
]
