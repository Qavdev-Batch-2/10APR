import {signInAA} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Launching Konga',() => {
  before(()=> {
    
})

  it('Should be able to signIn', () => {
    //launch url
    cy.visit('/')
    //testing signin page
    cy.get(signInAA.LoginBtn).click()
    cy.wait(2000)
    cy.get(signInAA.emailField).type('mahzeeljohn@gmail.com')
    cy.get(signInAA.passWordField).type('E.lens123456')
    cy.get(signInAA.LoginButton).click()

  })
})