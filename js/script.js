'use strict';

// ローディング判定
jQuery(window).on("load", function() {
	jQuery("body").attr("data-loading", "true");
});

jQuery(function() {
	// スクロール判定
	jQuery(window).on("scroll", function() {
		let scrollTop = jQuery(this).scrollTop();
		let windowHeight = jQuery(this).height();
		let documentHeight = jQuery(document).height();

		if (100 < scrollTop) {
			jQuery("body").attr("data-scroll", "true");
		} else {
			jQuery("body").attr("data-scroll", "false");
		}

		if (documentHeight - (windowHeight + scrollTop) <= 0) {
			jQuery("body").attr("data-scroll-bottom", "true");
		} else {
			jQuery("body").attr("data-scroll-bottom", "false");
		}
	});

	/* ドロワー */
	jQuery(".js-drawer").on("click", function(e) {
		e.preventDefault();
		let targetClass = jQuery(this).attr("data-target");
		let ariaControls = jQuery(this).attr("aria-controls");
		jQuery("." + targetClass).toggleClass("is-checked");

		if (jQuery("#" + ariaControls).attr("aria-hidden") === "true") {
			jQuery("#" + ariaControls).attr("aria-hidden", "false");
		} else {
			jQuery("#" + ariaControls).attr("aria-hidden", "ture");
		}

		if (jQuery(this).attr("aria-expanded") === "true") {
			jQuery(this).attr("aria-expanded", "false");
		} else {
			jQuery(this).attr("aria-expanded", "ture");
		}
		return false;
	});

	/* スムーススクロール */
	jQuery('a[href^="#"]').click(function() {
		let header = jQuery("#header").height();
		let speed = 300;
		let id = jQuery(this).attr("href");
		let target = jQuery("#" == id ? "html" : id);
		let position = jQuery(target).offset().top - header;
		if ("fixed" !== jQuery("#header").css("position")) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		jQuery("html, body").animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

	/* 電話リンク */
	let ua = navigator.userAgent;
	if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
		jQuery('a[href^="tel:"]')
			.css("cursor", "default")
			.on("click", function(e) {
				e.preventDefault();
			});
	}

	// slick
	// $('.center').slick({
	// 	autoplay:true,
	// 	autoplaySpeed:3000,
	// 	dots:false,
	// 	arrows:true,
	// 	centerMode: true,
	// 	centerPadding: '20vw',
	// 	SlidesToShow:3,
	// 	responsive: [{
	// 		breakpoint: 768,
	// 				settings: {
	// 					slidesToShow: 1,
	// 					dots:true,
	// 					arrows:false,
	// 					centerPadding: '0',
	// 		}
	// 	}]
	// });
	
	//ドロップダウン
	$('.answer').hide();
	$('.q-list').on('click',function(){
		$('.answer',this).slideToggle();
		$('.icon-a',this).slideToggle();
		$('.icon-aa',this).slideToggle();
	});
	
	//animation_bounceIn
	// 	$(window).scroll(function (){
	// 		$('.purchase_flow-animation img').each(function(){
	// 			var targetElement = $(this).offset().top;
	// 			var scroll = $(window).scrollTop();
	// 			var windowHeight = $(window).height();
	// 			if (scroll > targetElement - windowHeight + 200){
	// 				$(this).addClass("animate__animated animate__bounceIn");
	// 			}
	// 		});
	// 	});
	
	//animation_slide+zoom
	// $(".item_list-content>div").each(function(){
	// 	$(this).hover(function(){
	// 		$(this).addClass("slide");
	// 		$("img",this).addClass("zoom");
	// 	},
	// 	function(){
	// 		$(this).removeClass("slide");
	// 		$("img",this).removeClass("zoom");
	// 	});
	// });
	
	
	//画面上部へ戻る
	var pagetop = $('#page-top');
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.on('click',function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});








	
});
