/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//How to Auto handle popups
//these are accepted by default 
//but to grab text of them and do verification
//check this
cy.get('#alertbtn').click()
//using window:alert event for popups that we need to accept
cy.on('window:alert',(str) =>
{
expect(str).to.equal("Hello , share this practice page and share your knowledge")

})

cy.get('#confirmbtn').click()
//using window:confirm event for popups that we need to confirm
cy.on('window:confirm',(str) =>
{
expect(str).to.equal("Hello , Are you sure you want to confirm?")

})
//how to handle child window opening
//we need to remove traget attribute which is done by invoke function of cypress
//As it accepts jquery function removeattr()

cy.get('#opentab').invoke('removeAttr','target').click()



//fixture
 
}  )
 
 
 
}  )