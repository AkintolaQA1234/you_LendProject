import { Given } from "cypress-cucumber-preprocessor/steps"

const email = "atolayomi+15@gmail.com" //increase the number in the email address each time you want to run the test
const password = "Akinola_2000"

Given("I navigate to the url", () => {
    cy.visit('http://a.testaddressbook.com')
})

When("I click on the sign in button", () => {
    cy.get('[data-test=sign-in]').click()

    cy.get('h2').should('have.text', 'Sign in')
})

When("I click on the sign up button", () => {
    cy.get('[data-test=sign-up]').click()

    cy.get('.text-center').should('have.text', 'Sign up') 
})

When("I enter valid email address", () => {
    cy.get('[placeholder=Email]').type(email)
})

When("I enter valid password", () => {
    cy.get('[data-test=password]').type(password)
})

When("I click the sign up link", () => {
    cy.get('[data-test=submit]').click()
})

Then("the correct email address is displayed on the home page", () => {
    cy.get('[data-test=current-user]').should('have.text', email)
})

When("I log in with valid credentials", () => {
    cy.get('[data-test=email]').type(email)
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=submit]').click()
})

When("I click the address button", () => {
    cy.get('[data-test=addresses]').click()
})