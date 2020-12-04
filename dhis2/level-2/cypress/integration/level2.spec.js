
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });


describe("DHIS2 Level-2 challenge", ()=>{
    const dhis_Instance='http://localhost:9999';
    const username = 'admin';
    const password = 'district';
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      })
       
        it('Shows DHIS2 login', () => {
        console.log('login screen');
        cy.get("[data-test='dhis2-uicore-card']").should('be.visible');
    });
    it('Shows Application Menus', () => {
        cy.get('input[name="server"')
        .type(dhis_Instance);
        cy.get('input[name="j_username"]')
        .type(username);
        cy.get('input[name="j_password"]')
        .type(password);
        cy.get("[data-test='dhis2-adapter-loginsubmit']").click();
        cy.wait(3000);
        cy.get('div[id="root"]').should('contain', 'Menu');
        cy.get('div[id="root"]').should('contain', 'Programs');
        cy.get('div[id="root"]').should('contain', 'Data sets');
});

it('Shows Application Menus', () => {
    cy.get('input[name="server"')
    .type(dhis_Instance);
    cy.get('input[name="j_username"]')
    .type(username);
    cy.get('input[name="j_password"]')
    .type(password);
    cy.get("[data-test='dhis2-adapter-loginsubmit']").click();
    cy.wait(3000);
    cy.get('div[id="root"]').should('contain', 'Menu');
    cy.get('div[id="root"]').should('contain', 'Programs');
    cy.get('div[id="root"]').should('contain', 'Data sets');
    cy.get('div[id="root"]').should('contain', 'Programs');
    cy.get("li[data-test='menu-programs']").should('be.visible');
    cy.get("li[data-test='program-list']").should('not.exist');
    cy.get("li[data-test='menu-programs']").click();
    cy.get("li[data-test='program-list']").should('exist');
    cy.get("td[data-test='dhis2-uicore-tablecell']").should('not.exist');
});
});