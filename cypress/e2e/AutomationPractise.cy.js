//const cypress = require("cypress")

describe('template spec', () => {
  it('Test URL title', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(".login_logo").contains("Swag Labs")
   // cy.title().should('eq', 'OrangeHRM')
  })

  it('should have login button', () => {
    cy.wait(60)
    cy.get(".user-name").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()
  //  cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
})