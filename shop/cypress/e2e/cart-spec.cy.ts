import { routes } from "@/constants/routes";

describe("cart", () => {
  beforeEach(() => {
    cy.visit(routes.login);

    cy.login();

    cy.get("[data-cy=cart-link-desktop]").click();
  });

  it("should open modal after click on 'Show Now' button if there are products", () => {
    cy.wait(2500);

    cy.get("[data-cy=show-now-button]").then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("there are no products in the cart, button disabled");
      } else {
        $btn.click();

        cy.get("[data-cy=modal]").should("exist");
      }
    });
  });

  it("should clear cart after click on 'Confirm' button in modal if there are products", () => {
    cy.wait(2500);

    cy.get("[data-cy=show-now-button]").then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("there are no products in the cart, button disabled");
      } else {
        $btn.click();

        cy.get("[data-cy=modal-confirm-button]").click();

        cy.getCart().then((cart) => {
          expect(cart.length).to.equal(0);
        });
      }
    });
  });
});
