describe('Caso de prueba agregar producto y realizar compra', () => {
  it('usar login, comprar dos productos del listado, completar formulario y finalizar compra', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
//al seleccionar se utilizan los indices para diferenciar el click de cada producto
    cy.get('.inventory_item').eq(0).find('.btn_primary').click()
    cy.get('.inventory_item').eq(1).find('.btn_primary').click()

 //ver carrito con las compras apartadas
    cy.get('.shopping_cart_link').click()
 
    cy.get('#checkout').click()

    cy.get('#first-name').type('Diana')
    cy.get('#last-name').type('Davila')
    cy.get('#postal-code').type('12345')
    cy.get('#continue').click()

    cy.get('#finish').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
})

