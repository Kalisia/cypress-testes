describe("Studying Cypress", function() {
    it("Cypress Is Simple", function() {
      cy.visit("https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Is-Simple");
  
      cy.contains("Cypress Is Simple");
    });
  });