/*
---
description: This simple plugin provides HTML 5 placeholder attribute to all browsers.

license: MIT-style

authors:
- Alexey Gromov

requires:
  core/1.2.4: '*'

provides: none

...
*/
$(window).addEvent('domready', function()
{
	if ('placeholder' in document.createElement('input')) return;

	var color = '#aaa';

	$$('input').each(function(el)
	{
		var text = el.get('placeholder'),
		    defaultColor = el.getStyle('color');

		if (text)
		{
			el
				.setStyle('color', color)
				.set('value', text)

				.addEvent('focus', function()
				{
					if (el.value == '' || el.value == text)
					{
						el
							.setStyle('color', defaultColor)
							.set('value', '');
					}
				})

				.addEvent('blur', function()
				{
					if (el.value == '' || el.value == text)
					{
						el
							.setStyle('color', color)
							.set('value', text);
					}
				});
			
			var form = el.getParent('form');
			if (form)
			{
				form.addEvent('submit', function()
				{
					if (el.value == text)
						el.set('value', '');
				});
			}
		}
	});
});