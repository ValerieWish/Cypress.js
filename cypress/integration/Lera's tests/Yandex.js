//Ищем в Яндексе котят и сравниваем результат

describe('Проверка поиска котят', function (){
	it('Откроем поиск и найдем котят', function (){
	cy.visit('https://yandex.ru/');
	cy.get('#text').type('котята');
	cy.get('.search2__button > .button').click();
	cy.contains('Картинки по запросу «котята»');
	})
})

