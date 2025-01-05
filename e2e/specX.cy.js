/*describe('20.12.2024', () => {
  it('Test tooltips 2', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')
    cy.contains('Popover&tooltip').click()
    cy.contains('Tooltip').click()
    
    cy.get('h1').contains('Tooltips').parent().find('.tooltip-item').eq(0).trigger('mouseover')
    .parent()
    .next()
    .trigger('mouseover')
    .next()
    .trigger('mouseover')
    .next()
    .trigger('mouseover')
    //atď. až po 10
    .trigger('mouseout')
    .prev()
    .trigger('mouseout')
    .prev()
    .trigger('mouseout')
       //atď. až po 10
 
    cy.wait(2000)

    cy.go('back')

   // cy.get('h1').contains('Tooltips').parent().find('.tooltip-item').trigger('mouseout')

    //cy.wait(2000)
  })
})


describe('20.12.2024', () => {
  it('Test tooltips 2', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')

    cy.contains('UiElements').click()
    cy.contains('Dynamic-properties').click()

    cy.clock()
    cy.contains('Enable').click()
    cy.tick(12000)
    //cy.wait(8000)
    cy.get('Input').type('Ahoj webinár').siblings('button').click()
    cy.tick(8000)

  })
})


describe('20.12.2024', () => {
  it('Test tooltips 2', () => {
    cy.viewport(1440, 1200)
    cy.visit('https://atp.metis.academy')

    cy.contains('UiElements').click()
    cy.contains('Dynamic-properties').click()

    cy.clock()
    cy.contains('Show paragraphs').click()
    cy.tick(10000)
  })
})


describe('Príkaz Should', () => {

  it('.sholud()', () => {
      cy.viewport(1440, 1200)
      cy.visit('https://atp.metis.academy/')
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

///<reference types='cypress' />

describe('should() v testoch', () => {

    it('.should()', () => {
        cy.viewport(1440, 1200)
        cy.visit('https://atp.metis.academy/')
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

describe('Príkaz .should()', () => {

  it('.should()', () => {
      cy.viewport(1440, 1200)
      cy.visit('https://atp.metis.academy/')
      cy.contains('Login').click()
      cy.contains('Login-with-checkbox').click()

      cy.get('h1').should('have.class', 'text-indigo-500')

      cy.get('form input').eq(0).should('have.value', '').and('be.enabled').and('have.attr', 'placeholder', 'Name')
      cy.get('form input').eq(1).should('have.value', '').and('be.enabled').and('have.attr', 'placeholder', 'Password')
      cy.get('form input').eq(2).should('have.value', '').and('be.enabled').and('have.attr', 'placeholder', 'Secret Key')
      cy.get('form input[type="checkbox"]').should('not.be.checked').siblings('label').should('have.text', 'I agree to the terms')
      cy.get('form input[type="radio"]').should('not.be.checked').siblings('label').should('have.text', 'I confirm the veracity of the data')
      cy.get('form button').should('have.text', 'Log in')

      cy.get('form input').eq(0).type('testuser').should('have.value', 'testuser')
      cy.get('form input').eq(1).type('password').should('have.value', 'password')
      cy.get('form input').eq(2).type('secret').should('have.value', 'secret')
      cy.get('form input').eq(3).check().should('be.checked')
      cy.get('form input').eq(4).check().should('be.checked')
      cy.get('form button').click()

      cy.get('p').should('have.text', 'Úspešne ste sa prihlásili').and('have.class', 'text-green-500')
      cy.get('.shadow-2xl .p-4 button').should('have.class', 'bg-red-500').and('have.text', 'Log out')
      cy.get('.shadow-2xl .p-4 button').click()
      cy.get('p.mt-4').should('have.text', 'Úspešne ste sa odhlásili').and('have.class', 'text-green-500')

      cy.get('form button').click()
      cy.get('form p').should('have.class', 'text-red-600').and('have.text', 'Nesprávne prihlasovacie údaje')
  })
})
