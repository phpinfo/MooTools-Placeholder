MooTools-Placeholder
===========

This simple plugin provides HTML 5 placeholder attribute to all browsers.

![Screenshot](http://github.com/phpinfo/MooTools-Placeholder/raw/master/screenshot.png)

How to use
----------

Simple usage by setting placeholder color in options:

	<script type="text/javascript" src="/js/placeholder-min.js"></script>
	<script type="text/javascript">
		$(window).addEvent('domready', function(){
			new NS.Placeholder({
				color: '#ccc'
			});
		});
	</script>

By default NS.Placeholder adds 'placeholder' class:

	<style type="text/css">
		.my-placeholder {
			color: #ccc;
		}
	</style>

	<script type="text/javascript" src="/js/placeholder-min.js"></script>
	<script type="text/javascript">
		$(window).addEvent('domready', function(){
			new NS.Placeholder({
				cssClass: 'my-placeholder'
			});
		});
	</script>

You can set your elements collection to check ($$('input[type=text]') by default):

	<script type="text/javascript">
		$(window).addEvent('domready', function(){
			new NS.Placeholder({
				elements: $$('.input-search')
			});
		});
	</script>

...or just use string selector:

	<script type="text/javascript">
		$(window).addEvent('domready', function(){
			new NS.Placeholder({
				elements: '.input-search'
			});
		});
	</script>

For perfomance reasons you can enable effect for a single element:

	<script type="text/javascript">
		$(window).addEvent('domready', function(){
			new NS.Placeholder({
				elements: $('searchBox')
			});
		});
	</script>

Thanks to
---------

Thanks to Nikita Vasilyev for his genius solution: http://github.com/NV/placeholder.js.
Thanks to Arian Stolwijk for some MooTools experience: http://github.com/arian/MooTools-Placeholder.