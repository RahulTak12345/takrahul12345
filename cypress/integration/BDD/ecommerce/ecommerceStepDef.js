import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
///<reference types = "Cypress"/>

import HomePage from '../../../support/pageObjects/HomePage'

import ProductPage from '../../../support/pageObjects/ProductPage'

const homePage=new HomePage()
const productpage = new ProductPage()
//declaring name variable on top so that whole class can use it
let name

Given('I open Ecommerce page', () => 
{
    cy.visit(Cypress.env('url')+'/angularpractice/')

}

)
When('I add items to cart',function()
{
    homePage.getShopTab().click()
   this.data.productName.forEach(function(element)
   {
   
       cy.selectProduct(element)
   
   })
   productpage.checkOutButton().click()
   cy.contains("Checkout").click()

}

) 
Then ('I select the country submit and verify thankyou',()=>
{

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
    

}
)
When('I fill the form details',function(dataTable)
    {
//This is how we set test data in step definition as per our feature file in datatable.rawtable
        // [bobz , male   ]
        //If we want to store test data in any varaible then its done like this in below line
        //LIne 58 name is a variable whose value is then used in line 66. Also declare this name globally on top
    name = dataTable.rawTable[1][0]
        homePage.getEditbox().type(dataTable.rawTable[1][0])
        homePage.getgender().select(dataTable.rawTable[1][1])
    })
    // Then validate the forms behaviourm
    Then('validate the forms behaviour',function()
    {
    homePage.getTwoWaydataBinding().should('have.value',name)
    homePage.getEditbox().should('have.attr','minlength','2')
    homePage.getEnterpreneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
    })
  

