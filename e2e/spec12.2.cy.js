describe('16.12.2024', () => {
  it('Druhý Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.get('.first').click()
    cy.get('[href="/buttons"]').click()
    
    cy.get('.flex-1.p-4').find('div').find('div').eq(1).find('button').eq(0).click()
    cy.wait(4000)
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 1')

    cy.get('.flex-1.p-4').find('div').find('div').eq(1).find('button').eq(1).click()
    cy.wait(4000)
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 2')

    cy.get('.flex-1.p-4').find('div').find('div').eq(1).find('button').eq(2).click()
    cy.wait(4000)
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 3')

    cy.get('.flex-1.p-4').find('div').find('div').eq(1).find('button').eq(3).click()
    cy.wait(4000)
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 4')

    cy.get('.flex-1.p-4').find('div').find('div').eq(1).find('button').eq(4).click()
    cy.wait(4000)
    cy.get('.flex-1.p-4').find('div').find('div').find('p').contains('You click Button 5')
    
  })
})