// Preloader //
// $(window).on('load', function () {
//    $(".preloader").fadeOut("slow");
// });
function changeToBlueColor(){
  let blue = document.getElementsByClassName("learn-more-btn").style.background = "blue";
   console.log(blue);
 }
 function changeToBlackColor(){
 let  black = document.getElementsByClassName("learn-more-btn").style.background = "black";
   console.log(black);
 }
$(window).on('load' ,function () {
   $('.plant').addClass('rotate-plant'); 
   $('.glasses').addClass('rotate-glass');  
})
const background = document.querySelector('.images-compare-label'),
      plant = document.querySelector('.plant'),
      glasses = document.querySelector('.glasses'),
      keyboard = document.querySelector('.keyboard'),
      mac2 = document.querySelector('.mac2'),
      coffee = document.querySelector('.coffee'),
      btn1 = document.querySelector('.learn-more-btn'),
      btn2= document.querySelector('.learn-more-btn2'),
      heading = document.querySelector('.main-slider-text'),
      caption = document.querySelector('.slider-cap'),

      root = document.documentElement;

root.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  console.log(e + ' e');
  console.log(x  + ' x');
      //   y = e.clientY;
  background.style.transform = `translateX(${-x / 35}px)`;
  plant.style.transform = `translateX(${-x / 30}px)`;
  glasses.style.transform = `translateX(${x / 30}px)`;
  keyboard.style.transform = `translateX(${x / 30}px)`;
  mac2.style.transform = `translateX(${x / 30}px)`;
  btn1.style.transform = `translateX(${x / 30}px)`;
  btn2.style.transform = `translateX(${x / 30}px)`;
  coffee.style.transform = `translateX(${x / 30}px)`;
  heading.style.transform = `translateX(${x / 30}px)`;
  caption.style.transform = `translateX(${x / 30}px)`;
});

$(document).ready(function(){
   $('.js-img-compare').click(function(e){
       var offset = $(this).offset();
       $('.images-compare-handle').css({
           'top': e.pageY-offset.top,
           'left': e.pageX-offset.left,
           'transition': '0.5s'
       })
       $('.images-compare-separator').css({
         // 'top': e.pageY-offset.top,
         'left': e.pageX-offset.left
     })
   })
});
//Butter
butter.init({
   wrapperId: "butter",
 });

jQuery(function ($) {

   // Navbar Scroll Function
   var $window = $(window);
   $window.scroll(function () {
      var $scroll = $window.scrollTop();
      var $navbar = $(".navbar");
      if (!$navbar.hasClass("sticky-bottom")) {
         if ($scroll > 150) {
            $navbar.addClass("fixed-menu");
         }
         else {
            $navbar.removeClass("fixed-menu");
         }
      }
      
      if ($navbar.hasClass("white-bg-before")) {
         if ($scroll > 40) {
            $navbar.addClass("fixed-menu");
         }
         else {
            $navbar.removeClass("fixed-menu");
         }
      }
      
   });

   /*bottom menu fix*/
   if ($("nav.navbar").hasClass("sticky-bottom")) {
      var navHeight = $(".sticky-bottom").offset().top;
      $(window).scroll(function () {
         if ($(window).scrollTop() > navHeight) {
            $('.sticky-bottom').addClass('fixed-menu');
         } else {
            $('.sticky-bottom').removeClass('fixed-menu');
         }
      });
   }



   // Click Scroll to Top Function
   $(".scroll").on('click', function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1000);
   });


   $("body").append("<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>");
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $(window).on("scroll", function () {
      if ($(window).scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $("html, body").animate({
         scrollTop: 0
      }, 700);
      return false;
   });
   
   // ----- Main Banner Slider ----- //
   $(function () {
      var imagesCompareElement = $('.js-img-compare').imagesCompare();
      var imagesCompare = imagesCompareElement.data('imagesCompare');
      var events = imagesCompare.events();

      imagesCompare.on(events.changed, function (event) {                                                                  
          console.log(events.changed);
          console.log(event.ratio);
          if (event.ratio < 0.4) {
              console.log('We see more than half of the back image');
          }
          if (event.ratio > 0.6) {
              console.log('We see more than half of the front image');
          }

          if (event.ratio <= 0) {
              console.log('We see completely back image');
          }

          if (event.ratio >= 1) {
              console.log('We see completely front image');
          }
      });

      $('.js-front-btn').on('click', function (event) {
          event.preventDefault();
          imagesCompare.setValue(1, true);
      });

      $('.js-back-btn').on('click', function (event) {
          event.preventDefault();
          imagesCompare.setValue(0, true);
      });

      $('.js-toggle-btn').on('click', function (event) {
          event.preventDefault();
          if (imagesCompare.getValue() >= 0 && imagesCompare.getValue() < 1) {
              imagesCompare.setValue(1, true);
          } else {
              imagesCompare.setValue(0, true);
          }
      });
  });
   /*----- SideBar Menu On click -----*/
  var $menu_left = $(".side-nav-left");
  var $menu_right = $(".side-nav-right");
  var $menu_full = $(".full-nav");
  var $toggler = $("#menu_bars");   
    if ($("#menu_bars").length) {
       $("body").addClass("side-nav-push");
       
       if($toggler.hasClass("left")){
          $toggler.on("click", function (e) {
         $(this).toggleClass("active");
         var fade_logo = $(".navbar-logo-fade #menu_bars");
         if(!$(".navbar-logo-fade").hasClass("fixed-fade") && fade_logo.hasClass("active")) {
            $(".navbar-brand").addClass("d-none");
         }
             else if ($(".navbar-logo-fade").hasClass("fixed-fade")){
                $(".navbar-brand").addClass("d-none");
             }
         else {
            $(".navbar-brand").removeClass("d-none");
         }
         $(".side-nav-push").toggleClass("side-nav-push-toright");
         $menu_left.toggleClass("side-nav-open");
         e.stopPropagation();
       });
       }
       else if ($toggler.hasClass("right")){
          $toggler.on("click", function (e) {
            $(this).toggleClass("active");
            $(".side-nav-push").toggleClass("side-nav-push-toleft");
            $menu_right.toggleClass("side-nav-open");
            e.stopPropagation();
          });
       }
       else {
          if($toggler.hasClass("full")){
             $toggler.on("click", function (e) {
               $(this).toggleClass("active");
               $menu_full.toggleClass("side-nav-open");
               e.stopPropagation();
             });
          }
       }  
  }


   /*Sidemenu on click Close*/
   $(".side-nav").on("click", "a", function () {
      if ($(window).width() < 992) {
         $(".side-nav").removeClass("side-nav-open");
         $("#menu_bars").removeClass("active");
      }
   });
   
   
   
   if($(".navbar-logo-fade").length){
      $window.on("scroll", function () {
      if ($window.scrollTop() >590) { 
         $(".navbar-logo-fade").addClass("fixed-fade");
         $(".navbar-logo-fade .navbar-brand").addClass("d-none");
      } else {
         $(".navbar-logo-fade").removeClass("fixed-fade");
         $(".navbar-logo-fade .navbar-brand").removeClass("d-none");
      }
   });
   }
   
   // Pricing Table Hover Function Toggle
   $(".pricing-table-inner").hover(function () {
      if ($window.width() > 768) {
         $(".pricing-table-inner.main").removeClass("active");
         $(this).addClass("active");
      }
   }, function () {
      $(this).removeClass("active");
      $(".pricing-table-inner.main").addClass("active");
   });





   

   
//Company Stats Number Counter:
$(window).scroll(testScroll);
   var viewed = false;
   
   function isScrolledIntoView(elem) {
       var docViewTop = $(window).scrollTop();
       var docViewBottom = docViewTop + $(window).height();
   
       var elemTop = $(elem).offset().top;
       var elemBottom = elemTop + $(elem).height();
   
       return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
   }
   function testScroll() {
      if (isScrolledIntoView($(".company-stats-section")) && !viewed) {
          viewed = true;
          $('.stats-number-inner span').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 3000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
      }
    }

   
   /*---- Wow Initializing ----*/
    new WOW().init();
   var wow = new WOW({
       boxClass: 'wow',     animateClass: 'animated',
    offset: 0,       mobile: false,
        live: true
     });
     new WOW().init();
 });

// <!-- Initialize Main Swiper Slider-->
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  simulateTouch:false,
  speed: 3000,
  effect: 'fade',
  // autoplay: true,
  autoplaySpeed: 1000,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
   slideChangeTransitionStart: function () {
      
   },
  
},
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
  },
});

// About Slider
new Swiper(".about-company-slider", {
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
   },
   effect: 'fade',
   autoplay: {
      delay: 3000,
   },
});

// <!-- Team Member Swiper Slider-->
var swiper = new Swiper(".mySwiper2", {
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   // autoplay: true,
   autoplaySpeed: 1000,
   // pagination: {
   //   el: ".swiper-pagination",
   //   clickable: true,
   // },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 
   breakpoints: {
     640: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     768: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     414: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     360: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     320: {
       slidesPerView: 1,
       spaceBetween: 8,
     },
   },
 });

// Sponsors Slider
new Swiper(".mySwiper3", {
   slidesPerView: "5",
   spaceBetween: 0,
   loop: true,
   autoplay: {
      delay: 1000,
      
   },
   breakpoints: {
      1200: {
         slidesPerView: 5,
      },
      992: {
         slidesPerView: 3,
      },
      550: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      480: {
         slidesPerView: 1,
         spaceBetween: 0,
      }
   }
});

// Blog Listing Image Slider
// new Swiper(".blog-listing-image-slider", {
//    pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//    },
//    effect: 'fade',
//    autoplay: {
//       delay: 3000,
//    },
// });




