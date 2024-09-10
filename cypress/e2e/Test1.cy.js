describe('template spec', () => {
    // it('Test URL title', () => {
    //   cy.visit('https://www.matalan.co.uk/')
  
    //   cy.title().should('eq', 'OrangeHRM')
    // })
  
    it('should match the number of search results', () => {
      cy.visit('https://www.matalan.co.uk/')
  
      cy.get('input[placeholder="Search..."]').type('jumpers')
      cy.get("//ul[@class='sc-ifmBRf gCBGeM']/li").should('have.length',72)      
    })
  })