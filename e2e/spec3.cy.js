it('get() & click()', () => {
  cy.viewport(1440, 1200)
  cy.visit('https://atp.metis.academy') //Cypress hoď na tú URL
  cy.get('.first').click() //Nájdi element s triedou first a klikni naň
  cy.get('[href="/simple-buttons"]').click() //vyhľadaj mi odkaz/atribút href, ktorý sa = simple buttons a klikni naň
  cy.contains('Button 4').click() // 
  cy.get('h1').click() //Vyhľadá nadpis úrovne h1 a overí ho
  cy.contains('Button 1').click()
  cy.contains('Button 3').click() 
  cy.contains('Button 5').click()
})