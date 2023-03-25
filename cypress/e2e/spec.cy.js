describe('UI Testing to check bynder portal', () => {
  beforeEach(() => {
    cy.visit('http://wave-trial.getbynder.com/')
  })
  it('Go to Login Page, The user should be able to enter Username and Password', () => {
    cy.get('#inputEmail').type('qa-assignment')
    cy.get('#inputPassword').type('qa-Bynder2023!')
    cy.get('.login-btn').click()
    cy.screenshot('.login-btn')
    })
    it('The user should be able to click Profile button and should be able to Log off', () => {
      cy.get('#inputEmail').type('qa-assignment')
      cy.get('#inputPassword').type('qa-Bynder2023!')
      cy.get('.login-btn').click()
      cy.get('.profile').click()
      cy.get('form > .action-btn').click()
      })
      it('The user should be able to enter non existing Username and Password', () => {
      cy.get('#inputEmail').type('qa1-assignment')
      cy.get('#inputPassword').type('qa1-Bynder2023!')
      cy.get('.login-btn').click()
      })
      it('The user should be able to again enter the correct Username and Password', () => {
      cy.get('#inputEmail').type('qa-assignment')
      cy.get('#inputPassword').type('qa-Bynder2023!')
      cy.get('.login-btn').click()

 })
})