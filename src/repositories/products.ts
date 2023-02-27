import { mockProductData } from './../../db/products';

export interface Product {
  id: string;
  description: string;
  model: string;
  brand: string;
}

let original = [...mockProductData];
const copy = [...mockProductData];

export const getProductById = (id: string) => {
  try {
    const result = original.filter((product) => {
      return product.id === id;
    });
    return result[0];
  } catch (error) {
    return (error as Error).message;
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
    return (error as Error).message;
  }
};

export const deleteProductById = (id: string) => {
  try {
    const removalIndex = original.map((item) => item.id).indexOf(id);
    original.splice(removalIndex, 1);
    return true;
  } catch (error) {
    return (error as Error).message;
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

export const updateProductById = (payload: Product) => {
  try {
    const { id, description, model, brand } = payload;
    const item = getProductById(id);
    (item as Product).description = description;
    (item as Product).model = model;
    (item as Product).brand = brand;

    return item;
  } catch (error) {
    return (error as Error).message;
  }
};

export const reseed = () => {
  original = [...copy];
};
