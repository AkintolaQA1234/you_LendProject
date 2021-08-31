Feature: Create a new address

    As a valid user, I am able to create a new address 

    Scenario: Add new address 
    Given I navigate to the url
    And I click on the sign in button
    And I log in with valid credentials
    And I click the address button
    And I click the new address button
    And i fill out the new address form
    When i click the create address button
    Then the address is created successfully
    And I can verify some details 

    Scenario: Add a second address and verify error messages
    Given I navigate to the url
    And I click on the sign in button
    And I log in with valid credentials
    And I click the address button
    And I click the new address button
    And i fill out the address form without firstname and zipcode
    When i click the create address button
    Then the error messages are displayed

    And I fill the address form with first name and zipcode
    When i click the create address button
    Then the address is created successfully
    And I can see two addresses on the address list