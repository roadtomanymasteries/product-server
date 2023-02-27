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
    console.error({
      message: 'Cannot get product by Id',
      description: (error as Error).message,
    });
    throw error;
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
    console.error({
      message: 'Cannot get Products',
      description: (error as Error).message,
    });
    throw error;
  }
};

export const deleteProductById = (id: string) => {
  try {
    const removalIndex = original.map((item) => item.id).indexOf(id);
    original.splice(removalIndex, 1);
    return true;
  } catch (error) {
    console.error({
      message: 'Cannot delete product by Id',
      description: (error as Error).message,
    });
    throw error;
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
  try {
    original.push({ id, description, model, brand });
    return { id, description, model, brand };
  } catch (error) {
    console.error({
      message: 'Cannot add new product',
      description: (error as Error).message,
    });
    throw error;
  }
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
    console.error({
      message: 'Cannot update product by Id',
      description: (error as Error).message,
    });
    throw error;
  }
};

export const reseed = () => {
  original = [...copy];
};
