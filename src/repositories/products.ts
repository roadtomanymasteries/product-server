import { mockProductData } from './../../db/products';
import { Product } from '../services/products';

let original = [...mockProductData];
const copy = [...mockProductData];

export const getProductById = (id: string): Product => {
  try {
    const result = original.filter((product) => {
      return product.id === id;
    });
    return result[0];
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getProducts = ({
  type,
  value,
}: {
  type: keyof Product;
  value: string;
}) => {
  try {
    if (!type || !value) {
      return original;
    }
    return (original as Product[]).filter(
      (item) => item[type].toLowerCase() === value.toLowerCase(),
    );
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteProductById = (id: string) => {
  try {
    const removalIndex = original.map((item) => item.id).indexOf(id);
    original.splice(removalIndex, 1);
    return true;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const addNewProduct = ({
  id,
  description,
  model,
  brand,
}: {
  id: string;
  description: string;
  model: string;
  brand: string;
}) => {
  original.push({ id, description, model, brand });
  return { id, description, model, brand };
};

export const reseed = () => {
  original = [...copy];
};
