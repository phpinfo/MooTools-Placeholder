/*
---
description: This simple plugin provides HTML 5 placeholder attribute to all browsers.

license: MIT-style

authors:
- Alexey Gromov
- Nathan Reed

requires:
  core/1.2.4: '*'

provides:
  NS.Placeholder

...
*/
var NS = NS || {};
NS.Placeholder = new Class({
	Implements: [Options],

	options: {
		/**
		 * Elements to check
		 * (single element, elements collection or a string selector)
		 * @var {Element|Elements|String}
		 */
		elements: 'input[type=text], input[type=password]',

		/**
		 * CSS class when value is empty
		 * @var {String}
		 */
		cssClass: 'placeholder',

		/**
		 * Color to apply directly
		 * @var {String}
		 */
		color: null
	},

	/**
	 * Initialization
	 *
	 * @param {Object}
	 */
	initialize: function(options)
	{
		if('placeholder' in new Element('input')) {
			return;
		}

		// Setting options
		this.setOptions(options);

		// Retrieving elements to check
		var elements;
		switch (typeOf(this.options.elements))
		{
			case 'string':
				elements = $$(this.options.elements);
				break;
			case 'element':
				elements = [this.options.elements];
				break;
			default:
				elements = this.options.elements;
		}

		// Attaching events
		elements.each(function(el){

			// password element in IE? can't do it.
			if(el.get('type') == 'password' && Browser.Engine.trident) {
				return;
			}

			var text = el.get('placeholder');
			if (text)
			{
				// Storing placeholder text
				el.store('ns-placeholder-text', text);

				// Storing default color
				el.store('ns-placeholder-color', el.getStyle('color'));

				el.store('ns-placeholder-type', el.get('type'));

				// Bluring
				this.blur(el);

				// Events
				el.addEvents({
					focus: function(){ this.focus(el); }.bind(this),
					blur: function(){ this.blur(el); }.bind(this)
				});

				// Form submit
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
		}.bind(this));
	},

	/**
	 * Focus element
	 * @param {Element}
	 * @param {Boolean}
	 */
	focus: function(el, focus)
	{
		focus = focus == undefined || focus;

		var text = el.retrieve('ns-placeholder-text'),
			value = el.get('value');

		if (value == '' || value == text)
		{
			// Setting placeholder CSS class if defined
			if (this.options.cssClass)
				el[focus ? 'removeClass' : 'addClass'](this.options.cssClass);

			// Setting color if defined
			if (this.options.color)
				el.setStyle('color', focus ? el.retrieve('ns-placeholder-color') : this.options.color);

			// Value
			el.set('value', focus ? '' : text);

			// password inputs are a special case - just setting the value would leave it
			// masked. So we have to change the type to 'text' to show the placeholder
			// then change it back to 'password' when the user starts typing...
			// (does not work in IE)
			if(el.retrieve('ns-placeholder-type') == 'password') {
				el.set('type', focus ? 'password' : 'text');
			}
		}
	},

	/**
	 * Blur element
	 * @param {Element}
	 */
	blur: function(el)
	{
		this.focus(el, false);
	}
});
