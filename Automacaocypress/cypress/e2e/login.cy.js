/// <reference types="cypress"/>

// Funcionalidade
describe('Login senha errada ', () => {
    beforeEach(() => 
        {
            cy.visit('https://www.automationpratice.com.br/login');
        })
    it('Deve acessar a página de login', () => {
        // dado
        cy.get('#user').type ('eduardo@qazando.com');
        cy.get('#password').type ('12345');
        // quando 
        cy.get('#btnLogin').click();

        // então
        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')
        

    });

    it('sem digitação do email ', () => {
        // dado
        
        cy.get('#password').type ('123456');
        // quando 
        cy.get('#btnLogin').click();

        // então
        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')
        
        

    });

    it('Campo em branco ', () => {
        // dado
        
        
        // quando 
        cy.get('#btnLogin').click();

        // então
        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')
        
        

    });

    it(' email digitado errado', () => {
        // dado
        cy.get('#user').type ('tartarugaNinja ');
        
        cy.get('#password').type ('123456');
        // quando 
        cy.get('#btnLogin').click();

        // então
        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')
        
        

    });





    

    


    
});
