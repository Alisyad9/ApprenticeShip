it("can navigate pages", () => {
  cy.visit("http://localhost:3333/add-dog/");
  cy.contains("Search");
  cy.url().should("include", "/");
});

// it("", () => {
//   cy.visit("http://localhost:3333/add-dog/");
//   cy.contains("Search").click();
// });
