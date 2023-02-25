import { mockProductData } from '../../db/products';
import { getProductById } from '../repositories/products';

export interface Product {
  id: string;
  description: string;
  model: string;
  brand: string;
}

export interface UpdateProductType {
  id: string;
  product: Product;
}

export const updateProductById = (payload: UpdateProductType) => {
  try {
    const { id, product } = payload;
    const { description, model, brand } = product;
    const item = getProductById(id);
    item.description = description;
    item.model = model;
    item.brand = brand;

    return true;
  } catch (error) {
    throw new Error(error as string);
  }
};
