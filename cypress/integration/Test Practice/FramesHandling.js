///keep both of these reference types so that we get automatically all the methods
///<reference types="Cypress" />
///<reference types="cypress-iframe" />
///first install plugin cypress-iframe in terminal at your project level
///we need to import cypress-iframe
import 'cypress-iframe' 

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
///frameloaded method is used to enter into frames
cy.frameLoaded('#courses-iframe')
//now cy.iframe to get the locators
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

}  )
 
 
 
}  )