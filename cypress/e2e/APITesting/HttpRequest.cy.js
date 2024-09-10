const { describe } = require("mocha");

describe("HTTP Request", ()=>{
    it("GET call", ()=>{
        cy.request('GET', 'https://www.matalan.co.uk/')
        .its('status')
        .should('equal', 200);
    })

    it("Post call", ()=>{
        cy.request({
            method: 'POST',
            url: ''
        })
    })
})