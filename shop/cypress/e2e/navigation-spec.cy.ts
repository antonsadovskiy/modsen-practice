import { routes } from "@/constants/routes";

describe("navigation", () => {
  context("auth page", () => {
    it("redirect to login if user is not authorized", () => {
      indexedDB.deleteDatabase("firebaseLocalStorageDb");

      cy.visit(routes.home);

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.login}`);
    });

    it("redirect to registration after click on registration link", () => {
      indexedDB.deleteDatabase("firebaseLocalStorageDb");

      cy.visit(routes.login);

      cy.get("[data-cy=auth-link]").click();

      cy.url().should(
        "eq",
        `${Cypress.config().baseUrl}${routes.registration}`,
      );
    });

    it("redirect to login after click on login link", () => {
      indexedDB.deleteDatabase("firebaseLocalStorageDb");

      cy.visit(routes.registration);

      cy.get("[data-cy=auth-link]").click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.login}`);
    });

    it("redirect to home after login", () => {
      indexedDB.deleteDatabase("firebaseLocalStorageDb");

      cy.visit(routes.login);

      cy.login();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.home}`);
    });
  });

  context("home page", () => {
    beforeEach(() => {
      cy.visit(routes.login);

      cy.login();
    });

    it("redirect to shop after click on 'Shop' in header section", () => {
      cy.debug();
      cy.get("[data-cy=shop-link]").click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.shop}`);
    });

    it("redirect to shop after click on 'View all'", () => {
      cy.get("[data-cy=view-all-link]").click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.shop}`);
    });

    it("redirect to contact after click on 'Contact' in footer section", () => {
      cy.get("[data-cy=contact-link]").click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.contact}`);
    });

    it("redirect to product page with correct id after click on catalog card", () => {
      cy.get("[data-cy=catalog-card]").first().click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.product}/4`);
    });

    it("redirect to cart page after click on cart icon in header section", () => {
      cy.get("[data-cy=cart-link-desktop]").filter(":visible").click();

      cy.url().should("eq", `${Cypress.config().baseUrl}${routes.cart}`);
    });
  });

  context("common", () => {
    it("redirect to 404 page after type a wrong url", () => {
      cy.visit("/wrong-url");

      cy.get("[data-cy=error-page]").should("contain", "404 ERROR");
    });
  });
});
