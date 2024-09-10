//const cypress = require("cypress")

describe('Swag labs automated test', () => {
  it('Login and add expensive item to cart', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(".login_logo").contains("Swag Labs")

    cy.get("#user-name").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()
   
    cy.get(".title").contains("Products")
    cy.get("#item_5_title_link").click()
    cy.get("#add-to-cart").click()

    cy.get(".shopping_cart_badge").click()
    cy.get(".inventory_item_name").contains("Sauce Labs Fleece Jacket")
    cy.get(".inventory_item_price").contains("$49.99")
    cy.get("#continue-shopping").contains("Continue Shopping")
    cy.get("#checkout").contains("Checkout")
  }) 
})