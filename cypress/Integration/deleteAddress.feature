Feature: Delete existing address

    As a user, I should be able to delete existing addresses in the address list and verify that the list is empty

    Scenario: Delete Address
    Given I navigate to the url
    And I click on the sign in button
    And I log in with valid credentials
    And I click the address button
    When I delete all the addresses 
    Then the address list is empty 