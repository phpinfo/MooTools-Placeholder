if (typeof(NS) == 'undefined') NS = {};

/**
 * NS Placeholder
 * 
 */
$(window).addEvent('domready', function(){
	// Защита от браузеров, уже поддерживающих этот атрибут
	if ('placeholder' in document.createElement('input')) return;

	// Цвет
	var color = '#aaa';

	// Обработка всех полей ввода
	$$('input').each(function(el){

		// Текст для placeholder'a
		var text = el.getAttribute('placeholder');
		// Цвет текста по умолчанию
		var defaultColor = el.getStyle('color');

		if (text)
		{
			// Установка начальных значений
			el.setStyle('color', color);
			el.value = text;

			// Обработчики событий
			el.addEvent('focus', function(){
				if (this.value == '' || this.value == text)
				{
					this.setStyle('color', defaultColor);
					this.value = '';
				}
			});
			el.addEvent('blur', function(){
				if (this.value == '' || this.value == text)
				{
					el.setStyle('color', color);
					el.value = text;
				}
			});
			var f = el.getParents('form');
			if (f.length)
			{
				f[0].addEvent('submit', function(){
					if (el.value == text)
						el.value = '';
				});
			}
		}
	});
});