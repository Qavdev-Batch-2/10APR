import {signinAP, signup} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Exception Handling In Cypress', () => {
    beforeEach(() => { //No before Each 
      cy.visit('https://www.konga.com/');//Scenerio is wrong

  })

  it('Should be able to launch url', () => {
cy.get(signinAP.MyAcctBtn).click()
cy.get(signinAP.Myprofile).click()
cy.get(signinAP.MyAcInfo).click()
cy.get(signinAP.firstname).type('April')
cy.get(signinAP.lastname).type('May')
cy.get(signinAP.emailaddress).type('igbo@yopmail.com')
cy.get(signinAP.currentpass).type('null')
cy.get(signinAP.newpass).type('null')
cy.get(signinAP.confirmpass).type('null')
cy.get(signinAP.savechBtn).click()
cy.get(signinAP.diaddress).click()
cy.get(signinAP.NewaddressBtn).click()
cy.get(signinAP.MyOrders).click()
cy.get(signinAP.Ordhist).click()
cy.get(signinAP.Pendrating).click()
cy.get(signinAP.Mywallet).click()
cy.get(signinAP.Wallet).click()
cy.get(signinAP.DelAcct).click()
cy.get(signinAP.DeleteAcct).click()
  })
})
