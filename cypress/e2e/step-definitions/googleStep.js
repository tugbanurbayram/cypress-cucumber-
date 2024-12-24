const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("user navigates to {string}", (url) => {
  cy.visit(url);
});

When(/^user search for "([^"]*)"$/, (input) => {
  cy.get("#APjFqb").type(`${input}{enter}`);
});

Then(/^user should see "([^"]*)" in the URL$/, (url) => {
  cy.url().should("contain", url);
});

Then(/^user should see "([^"]*)" in the title$/, (title) => {
  cy.title().should("contain", title);
});
