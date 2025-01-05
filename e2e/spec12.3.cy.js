describe('16.12.2024', () => {
  it('Druhý Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.get('.first').click()
    cy.get('[href="/buttons"]').click()
    cy.get('h1:first-child + div > button:nth-child(1)').click()
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 1')
  })
})