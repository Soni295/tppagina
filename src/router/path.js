export const PATH = {
  HOME: "/",
  PRODUCT: "/product/:id",
  CART: "/cart",
};

export const PATHWITHID = {
  PRODUCT: (id) => PATH.PRODUCT.replace(/:id/, id),
};
