describe('20.12.2024', () => {
  it('Príkaz Should 2 ', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Select').click()

    cy.contains('Single Select').next().find('div').eq(0).should('not.have.class', 'selected')
    cy.contains('Single Select').next().find('div').eq(0).click().should('have.class', 'selected')

    cy.contains('Single Select').next().find('div').eq(1).should('not.have.class', 'selected')
    cy.contains('Single Select').next().find('div').eq(1).click().should('have.class', 'selected')

    cy.contains('Single Select').next().find('div').eq(2).should('not.have.class', 'selected')
    cy.contains('Single Select').next().find('div').eq(2).click().should('have.class', 'selected')

    cy.contains('Single Select').next().find('div').eq(3).should('not.have.class', 'selected')
    cy.contains('Single Select').next().find('div').eq(3).click().should('have.class', 'selected')

    cy.contains('Single Select').next().find('div').eq(4).should('not.have.class', 'selected')
    cy.contains('Single Select').next().find('div').eq(4).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').eq(0).should('not.have.class', 'selected')
    cy.contains('Multiple Select').next().find('div').eq(0).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').eq(1).should('not.have.class', 'selected')
    cy.contains('Multiple Select').next().find('div').eq(1).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').eq(2).should('not.have.class', 'selected')
    cy.contains('Multiple Select').next().find('div').eq(2).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').eq(3).should('not.have.class', 'selected')
    cy.contains('Multiple Select').next().find('div').eq(3).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').eq(4).should('not.have.class', 'selected')
    cy.contains('Multiple Select').next().find('div').eq(4).click().should('have.class', 'selected')

    cy.contains('Multiple Select').next().find('div').filter('.selected').should('have.length', 5)
    })
  })