/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//checkbox and Radio button work same using check or click method
//checking check box
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//unchecking check box
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//selecting multiple checkbox by taking a common property of checkboxes as locators
cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked').and('have.value','option2','option3')

//static dropdown practice
//we will have a select prop for static dropdown
// and we can select static drop down by using select method options like select by value or select by name
//and then using assertions we can validate them


cy.get('select').select('option2').should('have.value','option2')
 
 //Dynamic dropdown selection
 //first type some text
 cy.get('#autocomplete').type('Ind')
 //now use a common locator to select a country out of 3 countries
 //And then using Each method of cypress traverse and verify India using If clause
cy.get('.ui-menu-item').each(($el, index, $list) => {

if ($el.text()==="India")
{
cy.wrap($el).click()

}})


 //Last apply assertion and verify correct country was selected or not
 cy.get('#autocomplete').should('have.value',"India")
 
 //verify visible and invisible elements
 
 cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )