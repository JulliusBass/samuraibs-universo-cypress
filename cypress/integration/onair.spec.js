
it('Webapp deve estar online', function(){
    //um simple comentário
    cy.visit('/')
    
    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja')
})

