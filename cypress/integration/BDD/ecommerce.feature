     Feature: End to end Ecommerce validation
     
         Application regression 
         
@Regression

         Scenario: Ecommerce products delivery
         Given I open Ecommerce page
         When I add items to cart
         Then I select the country submit and verify thankyou
  @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    
    Then validate the forms behaviour