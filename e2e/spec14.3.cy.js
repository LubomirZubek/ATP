describe('20.12.2024', () => {
  it('Príkaz Should 3 ', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Login').click()
    cy.contains('Login-with-checkbox').click()

    cy.get('h1').should('have.class', 'text-indigo-500')

    cy.get('form input').eq(0).should('have.value','').and('be.enabled').and('have.attr', 'placeholder', 'Name')
    cy.get('form input').eq(1).should('have.value','').and('be.enabled').and('have.attr', 'placeholder', 'Password')
    cy.get('form input').eq(2).should('have.value','').and('be.enabled').and('have.attr', 'placeholder', 'Secret Key')

    cy.get('form input[type=checkbox]').should('not.be.checked').siblings('label').should('have.text', 'I agree to the terms')
    cy.get('form input[type=radio]').should('not.be.checked').siblings('label').should('have.text', 'I confirm the veracity of the data')

    cy.get('form input').eq(0).type('testuser').should('have.value', 'testuser')
    cy.get('form input').eq(1).type('password').should('have.value', 'password')
    cy.get('form input').eq(2).type('secret').should('have.value', 'secret')
    cy.get('form input').eq(3).check().should('be.checked')
    cy.get('form input').eq(4).check().should('be.checked')
    cy.get('form button').click()

    cy.get('p').should('have.text', 'Úspešne ste sa prihlásili').and('have.class', 'text-green-500')
    cy.get('.shadow-2xl .p-4 button').should('have.class', 'bg-red-500').and('have.text', 'Log out')
    cy.get('.shadow-2xl .p-4 button').click()

    cy.get('form button').click()
    cy.get('form p').should('have.class', 'text-red-600').and('have.text', 'Nesprávne prihlasovacie údaje')
  })
})