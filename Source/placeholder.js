/*
---
description: This simple plugin provides HTML 5 placeholder attribute to all browsers.

license: MIT-style

authors:
- Alexey Gromov

requires:
- core/1.2.4: '*'

provides: none

...
*/
 if (typeof(NS) == 'undefined') NS = {};
$(window).addEvent('domready', function()
{
	if ('placeholder' in document.createElement('input')) return;

	var color = '#aaa';

	$$('input').each(function(el)
	{
		var text = el.getAttribute('placeholder');
		var defaultColor = el.getStyle('color');

		if (text)
		{
			el.setStyle('color', color);
			el.value = text;

			el.addEvent('focus', function()
			{
				if (el.value == '' || el.value == text)
				{
					el.setStyle('color', defaultColor);
					el.value = '';
				}
			});
			el.addEvent('blur', function()
			{
				if (el.value == '' || el.value == text)
				{
					el.setStyle('color', color);
					el.value = text;
				}
			});
			var f = el.getParents('form');
			if (f.length)
			{
				f[0].addEvent('submit', function()
				{
					if (el.value == text)
						el.value = '';
				});
			}
		}
	});
});