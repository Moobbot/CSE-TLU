(function ($) {
	'use strict';
	$(document).ready(function () {
		var body_width = $('body').width();
		// 5px scrollbar
		if (body_width < 988) $('.footer-detail').fadeOut();
		// carousel
		var owl_banner = $('.banner-carousel');
		owl_banner.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		});
		var owl_partner = $('.partner-carousel');
		owl_partner.owlCarousel({
			items: 4,
			loop: true,
			nav: false,
			dots: false,
			autoHeight: true,
			// 	autoplay: true,
			// 	autoplayTimeout: 3000,
			// 	autoplayHoverPause: true,
		});
		var owl_tst = $('.typical-st-carousel');
		owl_tst.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		});
		// carousel

		// Footer
		$('.footer-title').click(function (e) {
			// $(this).siblings('.footer-detail').toggleClass('open');
			$(this).siblings('.footer-detail').fadeToggle();
		});
		$(window).resize(function () {
			body_width = $('body').width();
			if (body_width < 988) $('.footer-detail').fadeOut();
			else $('.footer-detail').show();
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
