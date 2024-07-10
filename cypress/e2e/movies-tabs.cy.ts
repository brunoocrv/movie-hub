describe('Movie tabs', () => {
  it('should to show popular movies tab', () => {
    cy.visit('/')

    cy.get('[data-testid="tabs"]').should('exist')
    cy.get('[data-testid="tab-trigger"]').contains('Popular movies')
    cy.get('[data-testid="tab-content"]').eq(0).should('be.visible')
  })

  it('should to show upcoming movies tab', () => {
    cy.visit('/')

    cy.get('[data-testid="tab-trigger"]').contains('Upcoming movies').click()
    cy.get('[data-testid="tab-content"]').eq(1).should('be.visible')
  })
})
