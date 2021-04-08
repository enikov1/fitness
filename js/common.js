$(document).ready(function () {
   
	$('.block_faq-item').each(function() {
		let _this = $(this);

		_this.find('.faq_item-header').on('click', function() {
			_this.siblings().removeClass('active');
			$(this).parent().toggleClass('active');
		});
	});

	$('#button_scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});


	const swiper_work = new Swiper('#section_tabs-1 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-1 .arrow-bottom',
			prevEl: '#section_tabs-1 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-1 .arrow_control-nav',
			clickable: true,
		},
	});

	const swiper_work2 = new Swiper('#section_tabs-2 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-2 .arrow-bottom',
			prevEl: '#section_tabs-2 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-2 .arrow_control-nav',
			clickable: true,
		},
	});

	const swiper_work3 = new Swiper('#section_tabs-3 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-3 .arrow-bottom',
			prevEl: '#section_tabs-3 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-3 .arrow_control-nav',
			clickable: true,
		},
	});

	const swiper_work4 = new Swiper('#section_tabs-4 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-4 .arrow-bottom',
			prevEl: '#section_tabs-4 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-4 .arrow_control-nav',
			clickable: true,
		},
	});

	const swiper_work5 = new Swiper('#section_tabs-5 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-5 .arrow-bottom',
			prevEl: '#section_tabs-5 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-5 .arrow_control-nav',
			clickable: true,
		},
	});

	const swiper_work6 = new Swiper('#section_tabs-6 .swiper-container', {
		direction: 'vertical',
		// effect: 'fade',
        loop: true,

		navigation: {
			nextEl: '#section_tabs-6 .arrow-bottom',
			prevEl: '#section_tabs-6 .arrow-top',
		},
		pagination: {
			el: '#section_tabs-6 .arrow_control-nav',
			clickable: true,
		},
	});


	const swiper_work_inner = new Swiper('#tabs_content', {
		slidesPerView: 1,
		watchOverflow: true,
		// direction: 'vertical',
        // spaceBetween: 100,
		// effect: 'fade',
        // loop: true,
	});

	$('.slide-1').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(0);

		$(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});
	$('.slide-2').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(1);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});
	$('.slide-3').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(2);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});
	$('.slide-4').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(3);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});
	$('.slide-5').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(4);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});
	$('.slide-6').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(5);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');
	});

	
});