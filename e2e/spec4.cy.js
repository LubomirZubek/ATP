it('get() & contains() & find() & click()', () => {
  cy.viewport(1440, 1200)
  cy.visit('https://atp.metis.academy') //Cypress hoď sa na tú URL
  cy.get('.first').click() //Nájdi element s triedou first a klikni naň
  cy.get('[href="/accordion"]').click() //vyhľadaj mi odkaz/atribút href, ktorý sa = accordion a klikni naň
  cy.contains('Accordion').click() // klikne na prvok obsahujúci text Accordion
  cy.contains('Panel 1').click() // klikne na Panel č.1
  cy.contains('Panel 2').click() 
  cy.contains('Panel 3').click()
  cy.get('.p-4.bg-gray-100') // toto sa pokúsi nájsť prvok uvedenej triedy p-4 Bg-gray-100
})