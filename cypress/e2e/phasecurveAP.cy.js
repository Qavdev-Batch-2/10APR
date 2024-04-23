/// <reference types="cypress" />

describe('Phasecurve', () => {
  
})

it('Opening Phasecurve', () => {
  cy.visit('https://phasecurve.com/')
  cy.get('[href="/portfolio"] > .chakra-text').click()
  cy.contains('Portfolio').click()

})