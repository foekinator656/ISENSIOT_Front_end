describe('basic cypress UI testing', () => {
  it('should find example url when visiting https://example.cypress.io', () => {
    cy.visit('https://example.cypress.io')
  })
  it('should go to login page when you visit localhost',() => {
    cy.visit('http://localhost:4200/')
    cy.url().should('eq','http://localhost:4200/login')
  })
  it('should go to home page when you have logged in',() => {
    cy.visit('http://localhost:4200/')
    cy.location("pathname").should("eq", "/login")
    cy.get("#submitButtonId").click()
    cy.location("pathname").should("eq", "/home")
  })
  it('should have token in cookie when you have logged in',() => {
    cy.visit('http://localhost:4200/')
    cy.location("pathname").should("eq", "/login")
    cy.get("#submitButtonId").click()
    cy.location("pathname").should("eq", "/home")
    cy.getCookie("token").should('exist')
  })
})
