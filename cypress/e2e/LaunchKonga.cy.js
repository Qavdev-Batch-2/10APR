import {LaunchKonga} from "../fixtures/selectors.js";

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
    cy.url().should('include', 'com')
    cy.url().should('include', 'konga')
    cy.url().should('eq', 'https://www.konga.com/')
    cy.url().should('contains', 'konga')
    cy.location('protocol').should('contains', 'https')
    cy.location('hostname').should('eq', 'www.konga.com') 
})
})
