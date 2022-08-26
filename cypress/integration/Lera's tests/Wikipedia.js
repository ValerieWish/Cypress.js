describe('Проверка поиска статей в Википедии', function (){
	it('Найдем Чудеса Света, перейдем в "Петра", проверим наличие ночного фото', function (){
	cy.visit('https://ru.wikipedia.org/');
	cy.contains('Добро пожаловать в Википедию');
	cy.get('#searchInput').type('Чудеса Света').type('{enter}');
	cy.get(':nth-child(17) > tbody > :nth-child(5) > :nth-child(1) > b > a').click();
	cy.xpath('//img[@height="174"]').should('exist');
	})
})
