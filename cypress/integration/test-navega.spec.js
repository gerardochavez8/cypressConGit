describe('Navegando por el sitio ucol', () => {
    
    it('Navegación por el portal ucol', () => {
        cy.visit('https://www.ucol.mx')
    });

    it('Busqueda en el portal ucol', () => {
        cy.get('#q').click()
        cy.get('#q')
            .type('plataforma educ')
            .should('have.value', 'plataforma educ')
        cy.get('.form-search-ucol').submit()
    });
});