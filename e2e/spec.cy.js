/*it('First test with Cypress - .get() & .click', () => {
  cy.viewport(1440, 1200)
  cy.visit('https://atp.metis.academy')
  cy.get('.first').click()
  cy.get('[href="/simple-buttons"]').click()
  cy.get('.bg-fuchsia-500').click()
})*/

/*describe('17.12.2024', () => {
  it('Trigger', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')

    cy.contains('Other').click() 
    cy.contains('Dropdown').click()

    cy.contains('Popover&tooltip').click() 
    cy.contains('Tooltip').click()
    cy.get('h1').contains('Tooltip').parent().find('.tooltip-item').trigger('mouseover')

    cy.wait(2000)

    cy.get('h1').contains('Tooltip').parent().find('.tooltip-item').trigger('mouseout')
    cy.wait(2000)
   
  })
})*/

describe('4.1.2025', () => {
  it('Úloha 10.3.1.', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp-lms.metis.academy')
    cy.get('.logo')
    cy.get('[href="index.html"]')
    cy.get('li a')
    cy.get('li')
  })
})