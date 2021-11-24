describe('Audio player', () => {
  it('Plays audio', () => {
    cy.visit('/');
    cy.wait(5000);
    cy.get('.composition-name:first').click();
    cy.wait(5000);
    cy.get('#play-button').click();
    cy.wait(5000);
    cy.get('#play-button-button').click();
  });
});
