describe('Search movie', () => {
  it('should search for movies', () => {
    cy.visit('/')

    cy.get('[data-testid="search-input"]').type('The Godfather')

    cy.get('[data-testid="search-button"]').click()
  })

  it('should search for movies and clear the results', () => {
    cy.visit('/')

    cy.get('[data-testid="search-input"]').type('The Godfather')
    cy.get('[data-testid="search-button"]').click()

    cy.wait(2000)

    cy.get('[data-testid="clear-results-button"]').click()
  })

  it('should show loader while searching', () => {
    cy.visit('/')
    cy.get('[data-testid="search-input"]').type('The Godfather')
    cy.get('[data-testid="search-button"]').click()
    cy.get('.animate-spin').should('be.visible')
    cy.get('.animate-spin').should('not.exist')
  })

  it('should search for movies and check if there are results', () => {
    cy.visit('/')

    cy.get('[data-testid="search-input"]').type('The Godfather')
    cy.get('[data-testid="search-button"]')
      .click()
      .then(() => {
        cy.wait(3000)
        cy.get('.grid').should('be.visible')
        cy.get('.grid')
          .find('[data-testid="movie-card"]')
          .should('have.length.greaterThan', 0)
      })
  })

  it('should search for movies and show a movie detail', () => {
    cy.visit('/')

    cy.get('[data-testid="search-input"]').type('The Godfather')
    cy.get('[data-testid="search-button"]')
      .click()
      .then(() => {
        cy.wait(3000)
        cy.get('.grid').should('be.visible')
        cy.get('.grid').find('[data-testid="movie-card"]').first().click()
      })
  })
})
