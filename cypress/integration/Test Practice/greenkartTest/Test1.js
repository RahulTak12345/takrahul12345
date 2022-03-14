/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//Parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)
//cy.get(':nth-child(3) > .product-action > button').click()
//iteration using indexing  - we use eq(n) method - where n starts from 0 like arrays
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
//iteration using Each method
 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

    //.text() -  to grab text
 
const textVeg=$el.find('h4.product-name').text()
//.includes -  to get product name selected from big filtered content
if(textVeg.includes('Cashews'))
{
    //wrap is used to avoid overstrike on click method else click will not work
cy.wrap($el).find('button').click()

//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//How to print text in test runner logs
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())
})

}
})
 
 
}  )
 
 
 
}  )