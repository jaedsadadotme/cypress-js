describe("Demo Open Google", () => {
    it("Demo Seach 'Cypress on google'", () => {
      cy.visit("https://google.com");
      cy.get('input[name="q"]').type("cypress");
      cy.get('form').submit()
      cy.wait(2000)
    });
});   