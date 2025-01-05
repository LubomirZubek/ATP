/*describe('17.12.2024', () => {
  it('Test checkboxy 1', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Main').click()
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

    cy.wait(1000)

    cy.get('h1:first-child').siblings('div').find('input').eq(0).check()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(1).check()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(2).check()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(3).check()
    cy.wait(1000)
    cy.get('h1:first-child').siblings('div').find('input').eq(4).check()
   
  })
})*/

describe('17.12.2024', () => {
  it('Test checkboxy 2', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Main').click()
    cy.contains('Checkboxes').click()

    cy.get('h1').eq(1).next().find('span').filter('.Mui-checked').eq(0).find('input').uncheck()
    cy.wait(1000)
    cy.get('h1').eq(1).next().find('span').filter('.Mui-checked').eq(0).find('input').uncheck()
    cy.wait(1000)
    cy.get('h1').eq(1).next().find('span').not('.Mui-checked').find('input').eq(1).check()
    cy.get('h1').eq(1).next().find('span').not('.Mui-checked').find('input').eq(1).check()
    cy.get('h1').eq(1).next().find('span').not('.Mui-checked').find('input').eq(1).check()
    cy.get('h1').eq(1).next().find('span').not('.Mui-checked').find('input').eq(1).check()
    cy.get('h1').eq(1).next().find('span').not('.Mui-checked').find('input').eq(1).check()

    cy.get('h1').eq(1).next().find('span').filter('.Mui-checked').find('input').eq(0).uncheck()
  })
})
