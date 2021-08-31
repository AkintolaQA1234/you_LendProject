Feature: Create a new account

    As a new user, I am able to create an account

    Scenario: Successfully create an account and sign in
    Given I navigate to the url
    And I click on the sign in button
    And I click on the sign up button
    And I enter valid email address
    And I enter valid password
    When I click the sign up link
    Then the correct email address is displayed on the home page