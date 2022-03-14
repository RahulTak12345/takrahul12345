/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//how to handle child window opening
//we need to remove target attribute which is done by invoke function of cypress
//As it accepts jquery function removeattr()

cy.get('#opentab').invoke('removeAttr','target').click()
//to get current URL
cy.url().should('include','rahulshettyacademy')
//To go back to original page
//cy.go('back')


//fixture
 
}  )
 
 
 
}  )