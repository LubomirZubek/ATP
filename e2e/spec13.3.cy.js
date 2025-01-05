describe('20.12.2024', () => {
  it('Dynamic Properties ', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Dynamic-properties').click()

    cy.clock()
    cy.contains('Enable').click()
    //cy.wait(8000)
    cy.tick(9000)
    cy.get('Input').type('Ahoj webinár').siblings('button').click()
    cy.tick(8000)
    })
  })

  /*describe('20.12.2024', () => {
    it('Dynamic Properties ', () => {
      cy.viewport(1440, 1200)
      cy.visit('https://atp.metis.academy')
      cy.contains('UiElements').click()
      cy.contains('Dynamic-properties').click()

      cy.clock()
      cy.contains('Show paragraphs').click()
      cy.tick(8000)
          
      })
    })*/
  