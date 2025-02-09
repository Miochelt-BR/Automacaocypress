describe("login", () => {
  it("testando login válido", () => {
    cy.visit('/')
        .get('.logo > img')
        .get('#top_header').as('cabecalho')
              .contains('Login')
              .get('#top_header').as('cabecalho')
              .get ('@cabecalho')
             .find('.fa-user')
            
   

  });
});