
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


    if(document.getElementById("default-select")) {
      $('select').niceSelect();
    };

    $.extend(true, $.magnificPopup.defaults, {
      tClose: 'Закрыть (Esc)', // Alt text on close button
      tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
      gallery: {
        tPrev: 'Туда (Стрелка влево)', // Alt text on left arrow
        tNext: 'Сюда (Стрелка вправо)', // Alt text on right arrow
        tCounter: '%curr% / %total%' // Markup for "1 of 7" counter
      },
      image: {
        tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
      },
      ajax: {
        tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
      }
    });

    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });


  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

  //  Counter Js 

    // $('.counter').counterUp({
    //   delay: 10,
    //   time: 1000
    // });


  // $('.play-btn').magnificPopup({
  //   type: 'iframe',
  //   mainClass: 'mfp-fade',
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: false
  // });

  $('.active-city-carusel').owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    margin:30,
    nav:true,
    navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],
    responsive:{    
    0:{
      items: 1
    },
    414:{
      items: 2
    },
    768:{
      items: 3
    }
  }
  });

  $('.single-carusel .image-wrap').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-with-zoom',
      zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });


  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });


  // $(document).ready(function() {
  //     $('#mc_embed_signup').find('form').ajaxChimp();
  // });   


  $(".header-btn").click(function() {
    if ($(".banner-left").hasClass('another-side')) {
      $(".banner-left").removeClass('another-side');
      setTimeout(function(){
        $('.front').removeClass("hidden");
        $('.back').addClass("hidden");
      }, 350);
    } else {
      $(".banner-left").addClass('another-side');
      setTimeout(function(){
        $('.front').addClass("hidden");
        $('.back').removeClass("hidden");
      }, 350);
    }
  });

});
