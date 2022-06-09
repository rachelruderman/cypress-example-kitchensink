context('Cypress.config() base url', () => {
  it('sets baseUrl from configuration options', () => {
    const config = Cypress.config()

    expect(config).to.have.property('baseUrl', 'https://github.com')
  })

  it('uses baseUrl with cy.visit()', () => {
    cy.visit('/cypress-io/cypress/issues/22181')
    cy.url().should('eq', 'https://github.com/cypress-io/cypress/issues/22181')
  })

  it('uses baseUrl with cy.request()', () => {
    cy.request('/manifest.json').should((response) => {
      expect(response.status).to.equal(200)
      expect(response.allRequestResponses[0]).to.have.property('Request URL', 'https://github.com/manifest.json')
    })
  })
})
