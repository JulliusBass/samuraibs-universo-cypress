
it('Webapp deve estar online', function(){
    //um simples comentário
    cy.visit('/')
    
    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja')
})

