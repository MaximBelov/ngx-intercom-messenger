describe('Intercom Widget', { testIsolation: true }, () => {
  beforeEach(() => {
    cy.intercept('https://api-iam.intercom.io/messenger/web/ping', cy.spy()).as('ping')
    cy.intercept('https://api-iam.intercom.io/messenger/web/launcher_settings', cy.spy()).as('launcher_settings')
    cy.intercept('https://api-iam.intercom.io/messenger/web/page_view_events', cy.spy()).as('page_view_events')
  })

  it('should boot widget', () => {
    cy.visit('/');
    cy.wait(1000)
    cy.get('@ping.all').should('have.length', 1);
    cy.get('@launcher_settings.all').should('have.length', 1);
    cy.get('@page_view_events.all').should('have.length', 1);
  })
})
