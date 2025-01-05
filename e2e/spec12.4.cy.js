describe('16.12.2024', () => {
  it('Druhý Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Select').click()
    cy.contains('Item 1')
  
  })
})


describe('16.12.2024', () => {
  it('Druhý1 Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Select').click()
    cy.contains('Single Select').parent().contains('Item 1').click()
    })
})

describe('16.12.2024', () => {
  it('Druhý2 Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Select').click()
    cy.contains('Single Select').siblings().contains('Item 1').click()
    cy.get('.selected')
    })
})

describe('16.12.2024', () => {
  it('Druhý3 Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('UiElements').click()
    cy.contains('Select').click()
    cy.contains('Single Select').siblings().contains('Item 1').click()
    cy.get('.selected').next().click()
    })
})

describe('17.12.2024', () => {
  it('Druhý2 Test', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Main').click() // skús  cy.get('.first').click()
    cy.contains('Checkboxes').click()
    cy.get('h1:first-child').siblings('div').find('input').eq(0).uncheck()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(1).uncheck()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(2).uncheck()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(3).uncheck()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(4).uncheck()
    
  })
})

describe('17.12.2024', () => {
  it('Span ako checkbox', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Main').click() // skús  cy.get('.first').click()
    cy.contains('Checkboxes').click()

    cy.get('h1').eg(1).next().find('span').filter('Mui-checked')
  })
})