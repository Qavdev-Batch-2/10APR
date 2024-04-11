import {signup} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Launching Konga',() => {
  before(()=> {
    cy.visit('/')
})

  it('Should be able to launch url', () => {
    cy.get(signup.LoginBtn).click()
    cy.get(signup.DontHaveAnAcc).click()
    cy.get(signup.firstName).type('April')
    cy.get(signup.lastName).type('May')
    cy.get(signup.email).type('igbo@yopmail.com')
    cy.get(signup.phoneNumber).type('08124908797')
    cy.get(signup.passWord).type('tiwi2025')
    cy.get(signup.createAccBtn).click()
    cy.get(signup.pin).type('1234')

  })
})