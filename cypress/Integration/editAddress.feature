Feature: Edit and update an existing address

    As a user, I should be able to edit an existng address, update address details and verify that the correct updated information is displayed

    Scenario: Edit and update address
    Given I navigate to the url
    And I click on the sign in button
    And I log in with valid credentials
    And I click the address button
    And I click the edit button 
    And I verify some address details 
    And I update the zip code and phone number
    When I click the update address button
    Then the address is updated
    And the correct updated information is displayed