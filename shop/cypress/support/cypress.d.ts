declare namespace Cypress {
  interface CartProductType {
    productId: number;
    amount: number;
    docId: string;
  }
  interface Chainable {
    login(): Chainable<void>;
    isCartEmpty(): Chainable<boolean>;
    getCart(): Chainable<CartProductType[]>;
  }
}
