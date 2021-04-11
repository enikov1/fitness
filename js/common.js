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

	$('.header_burger').on('click', function() {
		$('.menu_small').addClass('active');

		$('body').addClass('scroll_off');
	});

	$('#menu_small_close').on('click', function() {
		$('.menu_small').removeClass('active');

		$('body').removeClass('scroll_off');
	});

	// tabs

	

	if($(window).width() <= 768) {
		let tabs_header = $('.section_tabs-nav .selected'),
			tabs_button = $('.section_tabs-nav button'),
			tabs_button_active = $('.section_tabs-nav button.active');

		tabs_button.on('click', function() {
			let _this = $(this);

			tabs_header.text(_this.text());

			tabs_header.parent().toggleClass('active');

		});

		tabs_header.on('click', function() {
			tabs_header.parent().toggleClass('active');
		});
		tabs_header.text(tabs_button_active.text());
		tabs_button.wrapAll('<div class="tabs_button_wrap"></div>');
	}

	// selected

	if($(window).width() <= 540) {
		$('.item_select').each(function() {
			let _this = $(this),
				// item_select = _this.closest('.item_select'),
				item_buffer = _this.find('.smart-block');
			_this.next('.item_select-buffer').append(item_buffer);

		});
	}

	$('.item_select-right .open').on('click', function() {
		let _this = $(this),
			item_select = _this.closest('.item_select'),
			item_buffer = _this.next('.smart-block');
		
		item_select.next('.item_select-buffer').toggleClass('active');

		$(this).parent().toggleClass('active');
	});


	const swiper_work = new Swiper('#section_tabs-1 .swiper-container', {
		// direction: 'vertical',
		// effect: 'fade',
        loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});

	const swiper_work2 = new Swiper('#section_tabs-2 .swiper-container', {
		loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});

	const swiper_work3 = new Swiper('#section_tabs-3 .swiper-container', {
		loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});

	const swiper_work4 = new Swiper('#section_tabs-4 .swiper-container', {
		loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});

	const swiper_work5 = new Swiper('#section_tabs-5 .swiper-container', {
		loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});

	const swiper_work6 = new Swiper('#section_tabs-6 .swiper-container', {
		loop: true,
		breakpoints: {
			0: {
				navigation: {
					nextEl: '#section_tabs-1 .control_smart .arrow-right',
					prevEl: '#section_tabs-1 .control_smart .arrow-left',
				},
				pagination: {
					el: '#section_tabs-1 .control_smart .arrow_control-nav',
					clickable: true,
				},
			},
			900: {
				direction: 'vertical',

				navigation: {
					nextEl: '#section_tabs-1 .arrow-bottom',
					prevEl: '#section_tabs-1 .arrow-top',
				},
				pagination: {
					el: '#section_tabs-1 .arrow_control-nav',
					clickable: true,
				},
			}
		}
	});


	const swiper_work_inner = new Swiper('#tabs_content', {
		slidesPerView: 1,
		watchOverflow: true,
		onlyExternal: true,
		noSwiping: true,
		allowTouchMove: false,
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

	const prize_slider = new Swiper('#prize_slider', {
		// direction: 'vertical',
		// effect: 'fade',
		slidesPerView: 1,
        loop: true,

		navigation: {
			nextEl: '.section_advantages-right .arrow-right',
			prevEl: '.section_advantages-right .arrow-left',
		},
		pagination: {
			el: '.section_advantages-right .arrow_control-nav',
			clickable: true,
		},
	});

	let section_plan = null;

	function mobileSlideInit() {
		

		let section_plan = new Swiper('.section_plan', {
			slidesPerView: 1,
			// watchOverflow: true,
			// direction: 'vertical',
			// spaceBetween: 100,
			// effect: 'fade',
			// loop: true,

			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
					pagination: {
						el: '.section_plan .swiper-smart-nav',
						clickable: true,
					},
				},
				// 540: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 30
				// }
			}
		});

	}

	function mobileSlideDestroy() {
		if(section_plan != null) {
			section_plan.destroy();
			section_plan = null;
		}
		
	}

	if($(window).width() < 540) {
		mobileSlideInit();
	} else {
		mobileSlideDestroy();
	}

	$(window).on('resize', function() {
		if($(window).width() < 540) {
			mobileSlideInit();
		} else {
			mobileSlideDestroy();
		}

	});

	// reviews

	const reviews_slider = new Swiper('#reviews_slider .swiper-container', {
		// direction: 'vertical',
		// effect: 'fade',
		slidesPerView: 1.2,
		centeredSlides: true,
		spaceBetween: 32,
        loop: true,

		// navigation: {
		// 	nextEl: '#reviews_slider .arrow-left',
		// 	prevEl: '#reviews_slider .arrow-right',
		// },
		pagination: {
			el: '#reviews_slider .arrow_control-nav',
			clickable: true,
		},

		breakpoints: {
				0: {
					slidesPerView: 1,
					centeredSlides: true,
					spaceBetween: 20,
					
				},
				768: {
					slidesPerView: 1.2,
					spaceBetween: 32,
					navigation: {
						nextEl: '#reviews_slider .arrow-left',
						prevEl: '#reviews_slider .arrow-right',
					},
				}
				// 540: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 30
				// }
			}
	});
	
});