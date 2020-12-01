
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });


describe("React Level-1 challenge", ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      })
       
    it('Shows input elements', () => {
        cy.get('input[name="firstNumber"]').should('have.value', '');
        cy.get('input[name="secondNumber"]').should('have.value', '');
        cy.get('input[name="mathOperator"]').should('have.value', '');
        cy.get('button[name="btnMathOperator"]').should('exist')
        cy.get('div[id="result"]').should('exist');
        });


        it('Addition math operation works:', () => {
            cy.get('input[name="firstNumber"]').type(10);
            cy.get('input[name="secondNumber"]').type(2);
            // check, if addition works
            cy.get('input[name="mathOperator"]').type('+');
            cy.get('button[name="btnMathOperator"]').click();
            cy.get('div[id="result"]').should('contain', 12);
        });

        it('Subtraction math operation works:', () => {
            cy.get('input[name="firstNumber"]').type(10);
            cy.get('input[name="secondNumber"]').type(2);
            cy.get('input[name="mathOperator"]').type('-');
            cy.get('button[name="btnMathOperator"]').click();
            cy.get('div[id="result"]').should('contain', 8);
         });

         it('Multiplication math operation works:', () => {
            cy.get('input[name="firstNumber"]').type(10);
            cy.get('input[name="secondNumber"]').type(2);
            cy.get('input[name="mathOperator"]').type('*');
            cy.get('button[name="btnMathOperator"]').click();
            cy.get('div[id="result"]').should('contain', 20);
         });

         it('Division math operation works:', () => {
            cy.get('input[name="firstNumber"]').type(10);
            cy.get('input[name="secondNumber"]').type(2);
            cy.get('input[name="mathOperator"]').type('/');
            cy.get('button[name="btnMathOperator"]').click();
            cy.get('div[id="result"]').should('contain', 5);
         });


         it('Reminder math operation works:', () => {
            cy.get('input[name="firstNumber"]').type(11);
            cy.get('input[name="secondNumber"]').type(3);
            cy.get('input[name="mathOperator"]').type('%');
            cy.get('button[name="btnMathOperator"]').click();
            cy.get('div[id="result"]').should('contain', 2);
         });
});