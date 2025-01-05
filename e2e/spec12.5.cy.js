describe('17.12.2024', () => {
  it('Test log-in a log-out', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Login').click()
    cy.contains('Simple-login-form').click()
    
    cy.get('input').eq(0).type('testuser')
    cy.get('input').eq(1).type('password')
    cy.contains('Log in').click()
    cy.contains('Úspešne ste sa prihlásili')

    cy.wait(4000)
    cy.contains('Log out').click()
  })
})