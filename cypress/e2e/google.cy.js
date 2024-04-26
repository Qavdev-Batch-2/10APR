/// <reference types="cypress" />

describe('Testing Google', ()=> {
//AnyThing in this env will execute first.
 
})

it('Execute a search function',()=>{
    cy.visit('https://google.com/')
    //cy.wait(60000)

    //Search by typing inside the google search field
    //cy.get('[name="q"]').type('Nigeria most visit country{enter}')
    //cy.contains('Image').click()


    //Handlng Auto-suggetion 
    cy.get('.gLFyf').type('best food in nigeria')
    cy.contains('best restaurants in nigeria').click()


    //Assertions
    cy.get('.gLFyf')
        .should('be.enabled')
        .should('have.class', 'gLFyf')
        .should('')



})
