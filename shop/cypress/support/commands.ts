Cypress.Commands.add("login", () => {
  cy.fixture("auth.json").then((data: { email: string; password: string }) => {
    cy.get("[data-cy=email-input]").type(data.email);
    cy.get("[data-cy=password-input]").type(`${data.password}{enter}`);
  });
});

Cypress.Commands.add("isCartEmpty", () => {
  cy.wait(2500);

  cy.window()
    .its("Cypress")
    .its("store")
    .invoke("getState")
    .its("cart")
    .its("cartProducts")
    .then((cartProducts) => cartProducts.length === 0);
});

Cypress.Commands.add("getCart", () => {
  cy.wait(2500);

  cy.window()
    .its("Cypress")
    .its("store")
    .invoke("getState")
    .its("cart")
    .its("cartProducts");
});
