const username = "standard_user";
const password = "secret_sauce";

describe("Login to Saucedemo", () => {
  it("should log in with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  });
});