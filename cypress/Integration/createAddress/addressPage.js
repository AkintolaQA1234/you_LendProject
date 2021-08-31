import { Then, When } from "cypress-cucumber-preprocessor/steps"

When("I click the new address button", () => {
    cy.get('[data-test=create]').click()
})

When("i fill out the new address form", () => {
    cy.get('#address_first_name').type('Dave')
    cy.get('#address_last_name').type('Jones')

    cy.get('#address_street_address').type('1234 Compton')
    cy.get('#address_secondary_address').type('E Bay area')
    cy.get('#address_city').type('New Orleans')
    cy.get('#address_state').select('Louisiana')

    cy.get('#address_zip_code').type('70032')
    cy.get('#address_country_us').click()

    cy.get('#address_birthday').type('1986-08-28')

    // cy.get('#address_color').invoke('value', '#ff0000').trigger() - Attempts were made to change the colour by inplementing different code mechanisms. We were able to verify that the color displayed is black (in line 26)
    cy.get('#address_color').should('have.attr', 'value', '#000000') // verify that the color displayed is BLACK

    cy.get('#address_age').type('35')

    const filepath = 'images/google_image.jfif'
    cy.get('#address_picture').attachFile(filepath)

    cy.get('#address_phone').type('12345678910')
    cy.get('[for="address_interest_climb"]').click()
    cy.get('#address_note').type('Anaylst')
})

When("i click the create address button", () => {
    cy.get('[data-test=submit]').click()
})

Then("the address is created successfully", () => {
    cy.get('[data-test=notice]').should('have.text', 'Address was successfully created.')
})

Then("I can verify some details" , () => {
    cy.get('[data-test=first_name]').should('have.text', ' Dave')
    cy.get('[data-test=last_name]').should('have.text', ' Jones')
    cy.get('[data-test=city]').should('have.text', ' New Orleans')
})

When("i fill out the address form without firstname and zipcode", () => {
    cy.get('#address_first_name').type(' ')
    cy.get('#address_last_name').type('Jona')

    cy.get('#address_street_address').type('4321 Holden street')
    cy.get('#address_secondary_address').type('Vivian estate')
    cy.get('#address_city').type('Los Angeles')
    cy.get('#address_state').select('California')

    cy.get('#address_zip_code').type(' ')
    cy.get('#address_country_us').click()

    cy.get('#address_birthday').type('1992-03-01')

    cy.get('#address_age').type('29')

    const filepath = 'images/google_image.jfif'
    cy.get('#address_picture').attachFile(filepath)

    cy.get('#address_phone').type('87651555555')
    cy.get('[for="address_interest_read"]').click()
    cy.get('#address_note').type('Software tester')
})

Then("the error messages are displayed" , () => {
    cy.get('h4').should('have.text', '2 errors prohibited this address from being saved:')
    cy.get('ul > :nth-child(1)').should('have.text', "First name can't be blank")
    cy.get('ul > :nth-child(2)').should('have.text', "Zip code can't be blank")
})

When("I fill the address form with first name and zipcode", () => {
    cy.get('#address_first_name').clear()
    cy.get('#address_first_name').type('Michaela')

    cy.get('#address_zip_code').clear()
    cy.get('#address_zip_code').type('475638')
})

Then("I can see two addresses on the address list", () => {
    cy.get('[data-test=list]').click()
    cy.get('.table tbody tr').should('have.length', 2)

    // bonus point - assertion that there are 3 addresses on the list when in fact there are 2 addresses
    cy.get('.table tbody tr').should('have.length', 3)
    // cy.screenshot()
})