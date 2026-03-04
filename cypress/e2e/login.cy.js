describe('visitar o site Automation Exercise', () => {
  it('Deve visitar o site', () => {
    cy.visit('https://automationexercise.com/')

    cy.get('.fa.fa-lock').click()

    cy.get('[data-qa="signup-name"]').type('CompradoraTeste')
    cy.get('[data-qa="signup-email"]').type('CompradoraTeste@gmail.com')
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender2').click()

    cy.get('#password').type('testadora123')

    cy.get('#days').select('29')
    cy.get('#months').select('February')
    cy.get('#years').select('2005')

    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('#first_name').type('Testadora')
    cy.get('#last_name').type('Incrivel')

    cy.get('#address1').type('Rua Avenid Tav')

    cy.get('#country').select('Canada')
    cy.get('#state').type('Ontario')
    cy.get('#city').type('Toronto')
    cy.get('#zipcode').type('A1AA1A')
    cy.get('#mobile_number').type('55896584158')

    cy.get('[data-qa="create-account"]').click()

      })
 
})