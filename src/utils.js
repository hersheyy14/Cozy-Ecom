export const getProductFromProductArray = (cart, product) => {
  const returnedValue = cart.find((item) => {
    return item.id === product.id;
  });
  return returnedValue;
};
