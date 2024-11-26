import { routes } from "@/constants/routes";

describe("shop", () => {
  beforeEach(() => {
    cy.visit(routes.login);

    cy.login();

    cy.get("[data-cy=shop-link]").click();
  });

  context("ui", () => {
    it("should correctly filter by search value", () => {
      const searchValue = "men";
      cy.get("[data-cy=search-input]").type(searchValue);

      cy.wait(500);

      cy.get("body").then(($body) => {
        if ($body.find("[data-cy=catalog-card]").length > 0) {
          cy.get("[data-cy=catalog-card]").each(($el) => {
            cy.wrap($el)
              .find("[data-cy=catalog-card-title]")
              .invoke("text")
              .then((text) => {
                expect(text.toLowerCase()).to.include(
                  searchValue.toLowerCase(),
                );
              });
          });
        } else {
          cy.get("[data-cy=no-data]").should("exist").and("be.visible");
        }
      });
    });

    it("should correctly sort products by certain value", () => {
      cy.get("[data-cy=sort-select]").should("exist").and("not.be.disabled");

      let initialFirstItem = "";

      cy.get("[data-cy=catalog-card]")
        .first()
        .find("[data-cy=catalog-card-title]")
        .invoke("text")
        .then((text) => {
          initialFirstItem = text.trim();
        });

      // sort by descending

      cy.get("[data-cy=sort-select-placeholder]").click();
      cy.get("[data-cy=sort-option]").contains("Descending").click();

      let sortedLastItem = "";

      cy.get("[data-cy=catalog-card]")
        .last()
        .find("[data-cy=catalog-card-title]")
        .invoke("text")
        .then((text) => {
          sortedLastItem = text.trim();
          expect(sortedLastItem).to.deep.equal(initialFirstItem);
        });

      // sort by ascending

      cy.get("[data-cy=sort-select-placeholder]").click();
      cy.get("[data-cy=sort-option]").contains("Ascending").click();

      cy.get("[data-cy=catalog-card]")
        .first()
        .find("[data-cy=catalog-card-title]")
        .invoke("text")
        .then((text) => {
          sortedLastItem = text.trim();
          expect(sortedLastItem).to.deep.equal(initialFirstItem);
        });
    });
  });
});
