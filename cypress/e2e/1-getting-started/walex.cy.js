describe("Digikala Automation Test", () => {
  it("Should select and add the most expensive mobile phone to the shopping cart", () => {
    cy.viewport(1280, 720);
    cy.visit("https://dev-maham-panel.hectora.app/login");
    cy.get('input[name="userName"]').type('melika.bina@dfreight.org').click();
    cy.get('input[name="password"]').type('Mb$123456').click();
    cy.get('input[name="captcha_answer"]').type('178').click();
    cy.get('button[type="submit"]').click();
    cy.contains("Dashboard").should("exist");
    cy.wait(2000);
    cy.get('a[role="button"]').first().click();
    cy.get('button[type="button"]').first().click();
    cy.get('a[href="/inquiries/create-request"]').click();
    cy.wait(2000);
    cy.get('input[placeholder="Origin Door Name"]').click();
   


  //   cy.get('div[data-cro-id="plp-filter-icon"]').scrollIntoView().click({ force: true });
    
  //   cy.get('.text-subtitle-strong:contains("موبایل")').click();
  //   cy.wait(2000);
  //   cy.get('div[data-cro-id="plp-filter-icon"]').scrollIntoView().click({ force: true });
  //   cy.contains('محدوده قیمت').click();
  //   cy.get('input[name="min"]').type('10000000');
  //   cy.get('input[name="max"]').clear();
  //   cy.get('input[name="max"]').type('20000000');
  //   cy.wait(2000);
  //   cy.get('div[data-cro-id="plp-sort-icon"]').scrollIntoView().click({ force: true });
  //   cy.contains('div', 'گران‌ترین').click();
  //   cy.contains("گران‌ترین").should("exist");
  //   cy.wait(2000);
  //   cy.get('[data-product-index]').then(($elements) => {
  //     const firstItem = $elements[0];
  //     cy.wrap(firstItem).click();
  //   });
  //   cy.wait(2000);
  //   cy.window().then((win) => {
  //   cy.wrap(win).should('have.property', 'document').its('readyState').should('eq', 'complete');
  //   cy.wrap(win.document).then((doc) => {
  //   cy.get(doc).find('h1').first().invoke('text').should('match', /موبایل/);
  //   });
  // });

  });
});