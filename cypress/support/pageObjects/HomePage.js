class HomePage {
getEditbox() 
{

    return cy.get("input[name='name']:nth-child(2)")
}

getTwoWaydataBinding() 
{
    return cy.get("input[name='name']:nth-child(1)")

}
getEnterpreneur() 
{
    return cy.get("#inlineRadio3")

}

getShopTab() 
{
    return cy.get(':nth-child(2) > .nav-link')

}

getgender() 
{
    return cy.get("select")

}

}
// so as to make sure its available to all classes
export default HomePage;


