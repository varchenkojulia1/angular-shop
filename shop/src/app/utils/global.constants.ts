import {CardItemModel, ProductModel} from "./global.models";


export enum CATEGORY {
  PHONE = 'phone', TV = 'tv', WASHING_MACHINE = 'washing mashin'
}

export enum AVAILABILITY {
  IS_AVAILABLE = 'Available',
  NOT_AVAILABLE = 'Not available'
}

export const productList: ProductModel[] = [
  {
    id: 123,
    name: 'Iphone 6',
    description: 'phone',
    price: 1000,
    category: CATEGORY.PHONE,
    isAvailable: false
  },
  {
    id: 102,
    name: 'Samsung TV123',
    description: 'television',
    price: 3000,
    category: CATEGORY.TV,
    isAvailable: false
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

export const cartList: CardItemModel[] = [
  {
    id: 123,
    name: 'Iphone 6',
    description: 'phone',
    price: 1000,
    category: CATEGORY.PHONE,
    isAvailable: true,
    quantity: 1
  },
  {
    id: 101,
    name: 'Samsung WM123',
    description: 'washing machine',
    price: 1500,
    category: CATEGORY.WASHING_MACHINE,
    isAvailable: true,
    quantity: 1
  }
]
