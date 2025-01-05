it('get() & click()', () => {
  cy.viewport(1440, 1200)
  cy.visit('https://atp.metis.academy') //Cypress hoď na tú URL
  cy.get('.first').click() //Nájdi element s triedou first a klikni naň
  cy.get('[href="/simple-buttons"]').click() //vyhľadaj mi odkaz/atribút href, ktorý sa = simple buttons a klikni naň
  cy.get('.bg-cyan-500').click //klikne na prvý button, ktorý má požadovanú farbu cyan. Vychádzame z predpokladu, že je to druhé tlačítko.
  cy.get('h1').click() //Vyhľadá nadpis úrovne h1 a overí ho
  cy.get('.bg-fuchsia-500').click() //overuje buttony podľa farby
  cy.get('.bg-teal-500').click()
  cy.get('.bg-sky-500').click()
  cy.get('.bg-indigo-500').click()
})