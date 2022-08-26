//Проверю сайт Стая: авторизация с верными данными, создание и удаление питомца, выход, авторизация с неверным паролем

describe('Проверка сайта Стая', function (){
  it('Успешная авторизация в тестовом аккаунте', function (){
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('ТУТ ЛОГИН');
    cy.get('.auth-form > form > [type="password"]').type('ТУТ ПАРОЛЬ');
    cy.get('.auth-form__submit > .s-button__content').click();
    cy.contains('Мои заказы');
  })

  it('Создаем питомца', function (){
    cy.get('[href="/profile/pets"]').click();
    cy.wait(3000);
    cy.get('.dogs-data > :nth-child(2)').dblclick();
    cy.get('.dog-row > :nth-child(2) > .field').eq(0).type('Мистер Кусь');
    cy.get(':nth-child(1) > :nth-child(3) > .s-select > .s-select--caption').click();
    cy.get(':nth-child(1) > :nth-child(3) > .s-select > .s-select--option_list > :nth-child(35)').click();
    cy.get(':nth-child(1) > .dog--image--age > .dog--age > .dog--age-radio > .dog-label--btns-radio > :nth-child(1) > .radio-btn').click();
    cy.wait(3000);
    cy.get('[style=""] > .field-date-parent > .field').type('10.10.2010');
    cy.get(':nth-child(1) > .dog--bottom > :nth-child(1) > .field').type('8');
    cy.get(':nth-child(1) > .btn-pink-50').eq(0).click();
    cy.contains('Удалить');
  })

  it('Удаляем созданного питомца', function (){
  	cy.get('.dog--close-event > .svg > use').click();
  	cy.get('.modal__content > .btn-pink-50').click();
  })

  it('Выход из тестового аккаунта', function (){
	cy.xpath('//button[@class="profile__nav-link"]').click();
	cy.xpath('//button[@class="box__button box__button_ok s-button s-button_theme-dark"]').click();
	cy.xpath('//a[@href="/login"]').should('exist');
	})

  it('Неуспешная авторизация с неверным паролем', function() {
	cy.visit('https://staya.dog/');
	cy.xpath('//a[@href="/login"]').click();
	cy.xpath('//input[@data-v-3fa00444="" and contains(@type, "email")]').type('ТУТ ЛОГИН');
	cy.xpath('//input[@data-v-3fa00444="" and contains(@type,"password")]').type('ТУТ НЕВЕРНЫЙ ПАРОЛЬ');
	cy.xpath('//button[@class="auth-form__submit s-button s-button_theme-red"]').click();
	cy.contains('Невозможно войти с предоставленными учетными данными');
	})
})



