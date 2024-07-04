import { routes } from "@/constants/routes";

describe("cart", () => {
  beforeEach(() => {
    cy.visit(routes.cart);
  });

  it("should show cart products or no data message", () => {
    cy.isCartEmpty().then((isEmpty) => {
      isEmpty
        ? cy.get("[data-cy=cart-empty]").should("exist")
        : cy.get("[data-cy=cart-card]").should("exist");
    });
  });

  context("edit cart", () => {
    it("should add product to cart or go to cart if product already in cart", () => {
      cy.visit(routes.product + "/10");

      cy.get("[data-cy=product-info-button-container]").then(($container) => {
        if ($container.find("[data-cy=add-to-cart-button]").length > 0) {
          cy.get("[data-cy=add-to-cart-button]").click();

          cy.get("[data-cy=go-to-cart-button]", { timeout: 10000 }).should(
            "exist",
          );
        } else {
          cy.get("[data-cy=go-to-cart-button]").click();

          cy.url().should("eq", `${Cypress.config().baseUrl}${routes.cart}`);
        }
      });
    });

    it("should delete first element from cart if there are products and check cart size reduction", () => {
      cy.getCart().then((initialCart) => {
        const initialCartLength = initialCart.length;

        if (initialCartLength === 0) {
          cy.log("There are no products in the cart");
        } else {
          cy.get("[data-cy=delete-from-cart-button]").first().click();

          cy.getCart().then((updatedCart) => {
            expect(updatedCart.length).to.equal(initialCartLength - 1);
          });
        }
      });
    });

    it("should increase first element amount in cart if there are products", () => {
      cy.getCart().then((initialCart) => {
        const initialCartLength = initialCart.length;

        if (initialCartLength === 0) {
          cy.log("There are no products in the cart");
        } else {
          const initialFirstElemAmount = initialCart[0].amount;

          cy.get("[data-cy=increase-amount-button]").first().click();

          cy.getCart().then((updatedCart) => {
            const updatedFirstElemAmount = updatedCart[0].amount;

            expect(updatedFirstElemAmount).to.equal(initialFirstElemAmount + 1);
          });
        }
      });
    });

    it("should decrease first element amount in cart if there are products", () => {
      cy.getCart().then((initialCart) => {
        const initialCartLength = initialCart.length;

        if (initialCartLength === 0) {
          cy.log("There are no products in the cart");
        } else {
          const initialFirstElemAmount = initialCart[0].amount;

          cy.get("[data-cy=decrease-amount-button]").first().click();

          cy.getCart().then((updatedCart) => {
            const updatedFirstElemAmount = updatedCart[0].amount;

            expect(updatedFirstElemAmount).to.equal(initialFirstElemAmount - 1);
          });
        }
      });
    });
  });

  context("modal logic", () => {
    it("should disable 'Show Now' button if there are no products", () => {
      cy.isCartEmpty().then((isEmpty) => {
        isEmpty
          ? cy.get("[data-cy=show-now-button]").should("be.disabled")
          : cy.get("[data-cy=cart-card]").should("not.be.disabled");
      });
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
});
