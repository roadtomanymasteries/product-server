import { mockProductData } from '../../db/products';
import { Product } from '../services/products';

export const getProductById = (id: string): Product => {
  try {
    const result = mockProductData.filter((product) => {
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
      return mockProductData;
    }
    return (mockProductData as Product[]).filter(
      (item) => item[type].toLowerCase() === value.toLowerCase(),
    );
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteProductById = (id: string) => {
  try {
    const removalIndex = mockProductData.map((item) => item.id).indexOf(id);
    mockProductData.splice(removalIndex, 1);
    return true;
  } catch (error) {
    throw new Error(error as string);
  }
};
