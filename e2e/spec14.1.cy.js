describe('20.12.2024', () => {
  it('Príkaz Should 1 ', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Main').click()
    cy.contains('Buttons').click()

    cy.get('h1').should('have.class', 'text-indigo-500')
    cy.get('.shadow-2xl button').should('have.length', 5)

    cy.get('.shadow-2xl button:first-child').should('have.class', 'bg-teal-500')
    cy.get('.shadow-2xl button:nth-child(2)').should('have.class', 'bg-cyan-500')
    cy.get('.shadow-2xl button:nth-child(3)').should('have.class', 'bg-sky-500')
    cy.get('.shadow-2xl button:nth-child(4)').should('have.class', 'bg-fuchsia-500')
    cy.get('.shadow-2xl button:nth-child(5)').should('have.class', 'bg-indigo-500')

    cy.get('h1').parent().find('button').eq(0).click()
    cy.get('p').should('have.text', 'You click Button 1').and('have.class', 'bg-teal-500')

    cy.get('h1').parent().find('button').eq(1).click()
    cy.get('p').should('have.text', 'You click Button 2').and('have.class', 'bg-cyan-500')

    cy.get('h1').parent().find('button').eq(2).click()
    cy.get('p').should('have.text', 'You click Button 3').and('have.class', 'bg-sky-500')

    cy.get('h1').parent().find('button').eq(3).click()
    cy.get('p').should('have.text', 'You click Button 4').and('have.class', 'bg-fuchsia-500')

    cy.get('h1').parent().find('button').eq(4).click()
    cy.get('p').should('have.text', 'You click Button 5').and('have.class', 'bg-indigo-500')
    })
  })