context('Cypress.config() base url', () => {
  it('sets baseUrl from configuration options', () => {
    const config = Cypress.config()

    expect(config).to.have.property('baseUrl', 'https://example.cypress.io')
  })

  it('uses baseUrl with cy.visit()', () => {
    cy.visit('/cypress-api')
    cy.url().should('eq', 'https://example.cypress.io/cypress-api')
  })

  it('uses baseUrl with cy.request()', () => {
    cy.request('/assets/img/favicon.ico').should((response) => {
      expect(response.status).to.equal(200)
      expect(response.allRequestResponses[0]).to.have.property('Request URL', 'https://example.cypress.io/assets/img/favicon.ico')
    })
  })
})
