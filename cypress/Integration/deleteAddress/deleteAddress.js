import { When } from "cypress-cucumber-preprocessor/steps"

When("I delete all the addresses", () => {
    cy.contains('Destroy').click()

    cy.contains('Destroy').click()
})

When("the address list is empty", () => {
    cy.get('.table tbody tr').should('have.length', 0)
})