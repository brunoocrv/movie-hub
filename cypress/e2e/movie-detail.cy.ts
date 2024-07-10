describe('Movie detail', () => {
  it('should show movie detail', () => {
    cy.visit('/')

    cy.get('.grid').should('be.visible')
    cy.get('.grid').find('[data-testid="movie-card"]').first().click()
  })

  it('should show movie detail and close dialog', () => {
    cy.visit('/')

    cy.get('.grid').should('be.visible')
    cy.get('.grid').find('[data-testid="movie-card"]').first().click()

    cy.wait(2000)
    cy.get('[data-testid="close-dialog"]').click()
  })
})
