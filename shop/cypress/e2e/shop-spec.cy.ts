import { ProductType } from "@/api/types";
import { routes } from "@/constants/routes";

describe("shop", () => {
  beforeEach(() => {
    cy.visit(routes.shop);
  });

  const apiBaseUrl = Cypress.env("apiBaseUrl");

  context("api", () => {
    it("get a list of products", () => {
      cy.request(`${apiBaseUrl}/products`).then((response) => {
        expect(response.body).to.be.an("array");
        expect(response.status).to.eq(200);
      });
    });

    it("get a list of categories", () => {
      cy.request(`${apiBaseUrl}/products/categories`).then((response) => {
        expect(response.body).to.be.an("array");
        expect(response.status).to.eq(200);
      });
    });

    it("get a list of products with certain category", () => {
      const category = "jewelery";

      cy.request(`${apiBaseUrl}/products/category/${category}`).then(
        (response) => {
          response.body.forEach((item: ProductType) => {
            expect(item.category).to.eq(category);
          });

          expect(response.body).to.be.an("array");
          expect(response.status).to.eq(200);
        },
      );
    });

    it("get a list of sorted products", () => {
      const sort = "desc";

      cy.request(`${apiBaseUrl}/products?sort=${sort}`).then((response) => {
        expect(response.body).to.be.an("array");
        expect(response.status).to.eq(200);
      });
    });
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

    it("should correctly filter products by category 'jewelery'", () => {
      const categoryProductsCount = 4;

      cy.get("[data-cy=category-select]")
        .should("exist")
        .and("not.be.disabled");

      cy.get("[data-cy=category-select-placeholder]").click();

      cy.get("[data-cy=category-option]").contains("jewelery").click();

      cy.get("[data-cy=catalog-card]").should(
        "have.length",
        categoryProductsCount,
      );
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
