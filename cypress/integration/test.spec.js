describe('Directorio', () => {
    it('Navegación por el directorio', () => {
        cy.visit('http://localhost:3000')
    });

    it('Agregar registro', () => {
        cy.get('#btn-add').click().wait(1000).then(() => {
            cy.get('#modal-agregar')
                .should('be.visible')
                .wait(1000)
                .then(() => {
                    cy.get('#nombre').type("Gerry")
                    cy.get('#direccion').type("Villa de Álvarez")
                    cy.get('#telefono').type("3122008570")
                }).then(() => {
                    cy.get('#btn-close').click()
                    cy.get('#btn-submit').click()
                    cy.get('#modal-agregar').should('not.be.visible').wait(1000)
                })
        })
    });

    it('Elimiar registro', () => {
        cy.get('#btn-delete').click()
    });
});