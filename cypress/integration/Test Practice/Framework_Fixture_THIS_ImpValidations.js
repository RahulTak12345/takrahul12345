///<reference types = "Cypress"/>

import HomePage from './pageObjects/HomePage'
import ProductPage from './pageObjects/ProductPage'

describe('working with hooks', function() 
{
    //this before(function(){}) hook is wriiten inside describe but outside it blocks
    before(function()  {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
// this keyword takes the scope of data outside this fixture block so that whole js file can use it
            this.data = data
        })
      })
 
it('My FirstTest case',function() {
 
    const homePage=new HomePage()
    const productpage = new ProductPage()

//cy.visit("https://rahulshettyacademy.com/angularpractice/")
//How to set enevironment variable in cypress.json and use in your main js file
cy.visit(Cypress.env('url')+'/angularpractice/')
 homePage.getEditbox().type(this.data.name)
 homePage.getgender().select(this.data.gender)

 //some common validation checks
 // Verify mentioned name is displaying same in 'Two way data binding example' field
homePage.getTwoWaydataBinding().should('have.value',this.data.name)
 //verify value of any attribute
 //done using have.attr another jquery method where we verify attribute and it value
 homePage.getEditbox().should('have.attr','minlength',2)
 //verify whether a field is disabled or not
 homePage.getEnterpreneur().should('be.disabled')
 //lets see how to build custom commands 
 //this is done in support folder
homePage.getShopTab().click()
 //See support folder where we created selectProduct method
 //cy.selectProduct('Blackberry')
 //to select multiple options or do parameterization from fixture file
 //we keep in an array enclosed with []
//check example.js file
//using forEach method of jquery we can select multiple data from fixture file to reuse
this.data.productName.forEach(function(element)
{

    cy.selectProduct(element)

})
productpage.checkOutButton().click()
cy.contains("Checkout").click()
cy.get('#country').type("India")
cy.get('.suggestions > ul > li > a').click()
//wait mechanism for 1 test case can be done like this or if you want to put wait after some lines
Cypress.config('pageLoadTimeout',10000)
cy.get("input[type='checkbox']").click({force: true})
cy.get('.ng-untouched > .btn').click()
cy.get('.alert').then(function(element)

{
const Actualtext = element.text()
expect(Actualtext.includes("Success")).to.be.true
}  )

 
}  )
})