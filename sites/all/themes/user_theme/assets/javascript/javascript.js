(function ($) {
	'use strict';
	$(document).ready(function () {
		var owl = $('.banner-carousel');
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 2000,  
			autoplayHoverPause: true,
		});
	});
	$(document).mouseup(function (e) {});
	window.addEventListener('mouseover', function (e) {
		var container = $('name');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			//code here
		}
	});
	window.addEventListener('load', function () {});
})(window.jQuery);
