describe('Проверка заголовка на главной странице', () => {
  it('Проверка заголовка', () => {
    cy.visit('https://www.amiro.ru/');
    cy.contains('Комплексная платформа для сайтов и интернет-магазинов').should('exist');
  });

it('Проверка кнопки "Вход"', () => {
  cy.visit('https://www.amiro.ru/');
  cy.contains('Вход').should('exist');
});

it('Проверка перехода', () => {
  cy.visit('https://www.amiro.ru/');
  cy.contains('Контакты').click();
  cy.url().should('include', '/contacts');
});

it('Проверка логотипа', () => {
  cy.visit('https://www.amiro.ru/');
  cy.get('.dez_logo').should('exist');
});

it('Проверка блока "Создания сайта"', () => {
  cy.visit('https://www.amiro.ru/');
  cy.contains('Создать сайт').should('exist');
  cy.get('.amiro_top_menu').should('exist');
  cy.get('.amiro_top_menu').should('have.length.greaterThan', 0);
});

it('Проверка блока "Подробнее"', () => {
  cy.visit('https://www.amiro.ru/');
  cy.contains('Подробнее').should('exist');
  cy.get('.main_additional_buttons a').should('exist');
  cy.get('.main_additional_buttons a').should('have.length.greaterThan', 0);
});
});