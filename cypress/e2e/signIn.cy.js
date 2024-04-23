/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Smoke Test', () => {
   
  
})

it('Should not SignIn with incorrect details', () => {
    //Use incorrect email address
    cy.visit('https://konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    cy.get('#username').type('Mahzeeljohn@gmail.co')
    cy.get('#password').type('E.lens12345')
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})

it('Should SignIn with correct details', () => {
    //Use the correct details to login
    cy.visit('https://konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    cy.get('#username').type('Mahzeeljohn@gmail.com')
    cy.get('#password').type('E.lens123456')
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()

})

