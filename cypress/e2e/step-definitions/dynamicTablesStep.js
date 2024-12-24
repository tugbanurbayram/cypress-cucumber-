const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const DynamicTablesPages = require("../../pages/DynamicTablesPages");

const dynamicTablesPages = new DynamicTablesPages();

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url);
});

Then(/^the user should see the "([^"]*)" heading$/, (expectedText) => {
  dynamicTablesPages.getInventoryHeading().should("have.text", expectedText);
});

Then(/^the user should see the table with the headers below$/, (datatable) => {
  const arrDataTable = datatable.rawTable.flat();
  dynamicTablesPages.getHeaders().each(($el, index) => {
    cy.wrap($el).should("have.text", arrDataTable[index]);
  });
});

Then(/^the user should see the table with the rows below$/, (datatable) => {
  const arrDataTable = datatable.rawTable;
  dynamicTablesPages.getBody().each(($row, rowIndex) => {
    cy.wrap($row).each(($cell, cellIndex) => {
      cy.wrap($cell).should("have.text", arrDataTable[rowIndex][cellIndex]);
    });
  });
});

Then(
  /^the user should see the "([^"]*)" button is enabled$/,
  (expectedText) => {
    if (expectedText === "ADD PRODUCT") {
      dynamicTablesPages.getAddBtn().should("be.enabled");
    } else if (expectedText === "SUBMIT") {
      dynamicTablesPages.getSubmitBtn().should("be.enabled");
    } else {
      dynamicTablesPages.getXBtn().should("be.enabled");
    }
  }
);

Then(/^the user should see the "([^"]*)" text displayed$/, (expectedText) => {
  dynamicTablesPages.getTotalAmount().should("have.text", expectedText);
});

When(/^the user clicks on the "([^"]*)" button$/, (expectedText) => {
  if (expectedText === "ADD PRODUCT") {
    dynamicTablesPages.clickAddBtn();
  } else if (expectedText === "SUBMIT") {
    dynamicTablesPages.clickSubmitBtn();
  } else {
    dynamicTablesPages.clickXBtn();
  }
});

Then(
  /^the user should see the "([^"]*)" modal with its heading$/,
  (expectedText) => {
    dynamicTablesPages
      .getModal()
      .should("have.text", expectedText)
      .and("to.be.visible");
  }
);

Then(/^the user should see the "([^"]*)" label$/, (expectedText) => {
  dynamicTablesPages.getProductLabels().each(($label) => {
    cy.wrap($label).should("have.text", expectedText);
  });
});

Then(
  /^the user should see the "([^"]*)" input box is enabled$/,
  (inputBoxName) => {
    dynamicTablesPages.getProductInputs().each(($inputBox) => {
      cy.wrap($inputBox).should("be.enabled");
    });
  }
);

Then(/^the user should not see the "([^"]*)" modal$/, (expectedText) => {
  dynamicTablesPages
    .getModalTitle()
    .should("not.be.visible")
    .and("not.have.text", expectedText);
});

Then(/^the user enters the quantity as "([^"]*)"$/, (expectedInput) => {
  dynamicTablesPages.getProductQuantityInput().type(expectedInput);
});

Then(/^the user enters the product as "([^"]*)"$/, (expectedInput) => {
  dynamicTablesPages.getProductNameInput().type(expectedInput);
});

Then(/^the user enters the price as "([^"]*)"$/, (expectedInput) => {
  dynamicTablesPages.getProductQuantityInput().type(expectedInput);
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const arrDataTable = dataTable.rawTable.flat();
  dynamicTablesPages.getNewRaw().then(($cell, index) => {
    cy.wrap($cell).should("have.text", arrDataTable[index]);
  });
});
