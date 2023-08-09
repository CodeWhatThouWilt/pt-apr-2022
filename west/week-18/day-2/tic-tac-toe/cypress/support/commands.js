Cypress.Commands.add('playGame', (...moves) => {
    cy.visit("public/index.html");
    moves.forEach((move) => cy.get(`#square-${move}`).click())
})
