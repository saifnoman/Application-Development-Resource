
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });


describe("HTML Level-1 challenge", ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      })
       
    it('Shows input elements', () => {
        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="firstname"]').should('have.value', '');
        cy.get('input[name="email"]').should('have.value', '');
        cy.get('input[name="passwordInput"]').should('have.value', '');
        cy.get('input[name="passwordInput"]').should('have.value', '');
        cy.get('button[id="submitButton"]').should('exist');
        });

    it('Alert message:', () => {
       const firstName = 'Traour';
        cy.get('input[name="username"]').type('John');
        cy.get('input[name="firstname"]').type(firstName);
        cy.get('input[name="email"]').type('jtraour@gmail.com');
        cy.get('input[name="passwordInput"]').type('Traour');
        cy.get('input[name="passwordInput-repeat"]').type('Traour');
        cy.get('button[id="submitButton"]').click();
        cy.on('window:alert', (str) => {
          console.log(str);
          expect(str).to.equal("Thank you " + firstName + " for registering!");
    });
});
});