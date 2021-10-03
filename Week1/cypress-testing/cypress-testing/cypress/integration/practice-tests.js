it("can run a test", () => {
  assert.equal(1, 1);
});

it("can navigate pages", () => {
  cy.visit("http://localhost:3332/sign-up/");
});

it("can navigate pages", () => {
  cy.visit("http://localhost:3332/sign-up/");
  cy.contains("Email");
});

it("it works", () => {
  cy.visit("http://localhost:3332/sign-up");
  cy.contains("click").click();
  cy.url().should("include", "/welcome");
});

// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
//   cy.contains("within").click();
// });

// it("can navigate pages", () => {
//   cy.visit("https://example.cypress.io/");
//   cy.contains("within").click();
//   cy.url().should("include", "/commands/querying");
// });

// it("submit email", () => {
//   cy.get("#signup-form").find("input[name='email']").type("my-email@test.com");
//   cy.get("#signup-form").submit();
// });
