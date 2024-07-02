import { routes } from "@/constants/routes";
import { ContactUsType } from "@/pages/contact/schema";

describe("contact", () => {
  beforeEach(() => {
    cy.visit(routes.contact);
  });

  it("should submit form", () => {
    cy.fixture("contact.json").then((data: ContactUsType) => {
      cy.get("[data-cy=first-name-input]").type(data.firstName);
      cy.get("[data-cy=last-name-input]").type(data.lastName);
      cy.get("[data-cy=email-input]").type(data.email);
      cy.get("[data-cy=subject-input]").type(data.subject);
      cy.get("[data-cy=message-input]").type(data.message);

      cy.get("[data-cy=contact-form]").submit();
    });

    cy.get("[data-cy=first-name-input]").should("have.value", "");
    cy.get("[data-cy=last-name-input]").should("have.value", "");
    cy.get("[data-cy=email-input]").should("have.value", "");
    cy.get("[data-cy=subject-input]").should("have.value", "");
    cy.get("[data-cy=message-input]").should("have.value", "");
  });

  it("should have errors after submit", () => {
    cy.visit(routes.contact);

    cy.get("[data-cy=contact-form]").submit();

    cy.get("[data-cy=input-error]").should("exist");
  });
});
