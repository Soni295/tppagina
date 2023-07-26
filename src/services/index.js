import { elements } from "./mockProducts";

export function GetAllProducts() {
  return new Promise((res) => {
    setTimeout(() => {
      res(elements);
    }, 300);
  });
}
export function getProductsById(id) {
  return new Promise((res) => {
    setTimeout(() => {
      res(elements.find((element) => String(element.id) === id));
    }, 300);
  });
}
