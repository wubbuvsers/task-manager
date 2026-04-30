describe('Task Manager App', () => {
  it('should add a task successfully', () => {
    cy.visit('http://localhost:8100');

    cy.get('ion-input input').type('Homework');
    cy.contains('+').click();

    cy.contains('Homework').should('exist');
  });
});