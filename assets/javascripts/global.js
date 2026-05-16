//Start Document Don't Delete this
$(document).ready(function () {
  //Add Your Javascript Here
  "use strict";

  // Fix for Bootstrap Navwalker
  $('.navbar .dropdown > a .caret').click(function () {
    event.preventDefault();
    event.stopPropagation();
    $(this).toggleClass('caret-open');
    // $(this).parent().siblings('.dropdown-menu').toggleClass('show');
    $(this).parent().siblings('.dropdown-menu').slideToggle('fast');
    //$(".servertype__detail>li").removeClass(" is-active");
    // $(this).parent().parent().find('.dropdown').children('.dropdown-menu').css('background', 'pink');

    // if ($('.navbar .dropdown-menu').hasClass('show')) {
    //     $('.navbar .dropdown-menu').removeClass('show');
    //     $(this).toggleClass('caret-open');
    //     $(this).parent().siblings().toggleClass('show');
    // }
  });

  // Add hover effect to menus
  $('ul.navbar-nav li.dropdown').hover(function () {
    //$(this).children('ul.dropdown-menu').slideDown(); 
  }, function () {
    //$(this).children('ul.dropdown-menu').slideUp(); 
  });


  // Add active parent links on navigation a[href*=#]:not([href=#])
  $('.navbar a').bind('click', function (event) {
    if (this.pathname == window.location.pathname &&
      this.protocol == window.location.protocol &&
      this.host == window.location.host) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - -5
        }, 1000);
        return false;
      }
      //event.preventDefault();
    } else {
      location.href = this.href
    }
  });


  //Page Up script 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () { $("html, body").animate({ scrollTop: 0 }, 600); return false; });


  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.header').addClass('header--sticky');
    } else {
      $('.header').removeClass('header--sticky');
    }
  });

  $(".navbar-toggler").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("collapsed");
    $(".navbar-collapse").toggleClass("open");
    $(".header__menu-overlay").toggleClass("open");
    $("body").toggleClass("overflow-hidden");

  });
  $(".navbar-collapse").click(function (e) {
    e.stopPropagation();
  });
  $('.header__menu-overlay').click(function () {
    $(this).removeClass("open");
    $(".navbar-collapse").removeClass("open show");
    $(".navbar-toggler").removeClass("collapsed").attr("aria-expanded", "false");;
    $("body").removeClass("overflow-hidden");
  });


  $(document).ready(function () {
    $('#prjSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: true,
      autoplay: false,
      cellPadding: 200,
      swipe: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });
  $(document).ready(function () {
    $('#propSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: true,
      autoplay: false,
      cellPadding: 200,
      swipe: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });
  $(document).ready(function () {
    $('#valueSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: true,
      autoplay: false,
      cellPadding: 200,
      swipe: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });
  $(document).ready(function () {
    $('#developSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: true,
      autoplay: false,
      cellPadding: 200,
      swipe: true,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });




});
//End Document Don't Delete this


// Add Padding to ContentBox When the window resizes according to header height
$(window).on('resize', function () {
  // Get the height + padding + border of `#masthead`
  var headerHeight = $('#header').outerHeight();
  console.log(headerHeight);

  // Add the height to `.site-content`
  $('#contentArea').css('padding-top', headerHeight);
});

// Trigger the function on document load.
$(window).trigger('resize');