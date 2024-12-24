class DynamicTablesPages {
  getInventoryHeading() {
    return cy.get(".is-size-3");
  }

  getHeaders() {
    return cy.get("#product_table thead th");
  }

  getBody() {
    return cy.get("#product_table tbody td");
  }

  getAddBtn() {
    return cy.get("#add_product_btn");
  }

  getTotalAmount() {
    return cy.get("#total_amount");
  }
  getSubmitBtn() {
    return cy.get("#submit");
  }

  getXBtn() {
    return cy.get(".delete");
  }

  getModalTitle() {
    return cy.get("#modal_title");
  }

  getProductLabels() {
    return cy.get(".field label");
  }

  getProductInputs() {
    return cy.get(".field input");
  }

  getProductQuantityInput() {
    return cy.get("#quantity");
  }

  getProductNameInput() {
    return cy.get("#product");
  }

  getProductPriceInput() {
    return cy.get("#price");
  }

  getNewRaw() {
    return cy.get("#product_table tbody tr:nth-child(4) > td");
  }

  clickAddBtn() {
    this.getAddBtn().click();
  }

  clickSubmitBtn() {
    this.getSubmitBtn().click();
  }

  clickXBtn() {
    this.getXBtn().click();
  }
}

module.exports = DynamicTablesPages;
