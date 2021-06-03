context('newsme', () => {

  it('Should load into a page and see a header and a list of articles that you can filter', () => {
    cy.visit('http://localhost:3000')
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=title]').contains('NEWS ME')
    .get('[data-cy=newsCard]').should('exist')
    .get('[data-cy=cardsListLayout]').click()
  })

  it('Should be able to link to more details about the article and then return to front page', () => {
    cy.visit('http://localhost:3000')
    .get('[data-cy=newsCard]').first().click()
    .get('[data-cy=detailLayout]').should('exist')
    .get('[data-cy=DetailTitle]').should('exist')
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=backbuttonLayout]').click()
    .get('[data-cy=newsCard]').should('exist')
  })

})
