import { When } from "cypress-cucumber-preprocessor/steps"

When("I click the edit button", () => {
    cy.contains('Edit').click()
})

When("I verify some address details", () => {
    cy.get('h2').should('have.text', 'Editing Address')

    // unable to verify details on edit address pgae, see readme.txt for more info
    // cy.get('#address_first_name').click().should('have.text', 'Dave')
    // cy.get('#address_last_name').should('have.text','Jones')

    // cy.get('#address_street_address').should('have.text','1234 Compton')

    // cy.get('[for="address_country_us"]').should('be.selected')

    // cy.get('#address_zip_code').should('have.text','70032')
    
    // cy.get('#address_phone').should('have.text','12345678910')
})

When("I update the zip code and phone number", () => {
    cy.get('#address_zip_code').clear()
    cy.get('#address_zip_code').type('200045')

    cy.get('#address_phone').clear()
    cy.get('#address_phone').type('01987654321')
})

When("I click the update address button", () => {
    cy.get('[data-test=submit]').click()
})

Then("the address is updated", () => {
    cy.get('[data-test=notice]').should('have.text', 'Address was successfully updated.')
})

Then("the correct updated information is displayed", () => {
    cy.get('[data-test=zip_code]').should('have.text', ' 200045')
    cy.get('[data-test=phone]').should('have.text', ' 0198-765-4321')
})