describe('my tests', () => {
    before(() => {
      cy.log('suite before')
      console.log('suite before')
    })
    
    beforeEach(() => {
      cy.log('suite beforeEach')
      console.log('suite beforeEach')
    })
    
    it('visit', () => {
      cy.log('test body')
      console.log('test body')
    })
  
    afterEach(() => {
      cy.log('suite afterEach')
      console.log('suite afterEach')
    })
  
    after(() => {
      cy.log('suite after')
      console.log('suite after')
    })
  })
  
  afterEach(() => {
    cy.log('main afterEach')
    console.log('main afterEach')
  })
  
  after(() => {
    cy.log('main after')
    console.log('main after')
  })
  