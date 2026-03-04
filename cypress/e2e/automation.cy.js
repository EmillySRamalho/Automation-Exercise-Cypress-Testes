describe('visitar o site Automation Exercise e colocar produto no carrinho', () => {
  it('Deve visitar o site', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains("a", "Products").click()
    cy.contains("a", "Women").click()
    cy.contains("a", "Saree").click()

   cy.get('a')
    .filter(':contains("View Product")')
    .eq(2)
    .click()

    cy.get('#quantity').clear().type('3')
    cy.get('.btn.btn-default.cart').click()

    cy.get('.btn.btn-success.close-modal.btn-block').click()

    cy.get('#name').type('CompradorTeste')
    cy.get('#email').type('CompradorTeste@gmail.com')
    cy.get('#review').type('Esse Saree sao para as minhas filhas que tem decendencia arabe')

    cy.get('#button-review').click()

    cy.contains("a", "Cart").click()

    cy.get('.btn.btn-default.check_out').click()



  })
 
})

