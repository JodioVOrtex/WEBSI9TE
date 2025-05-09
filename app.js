/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Active Menu          *
 *     04.  Clickable Menu       *
 *     05.  Back to top          *
 *     06.  Feather icon         *
 *     06.  DD Menu              *
 *     06.  Active Sidebar Menu  *
 ================================*/

 
 //Menu
 // Toggle menu
 function toggleMenu() {
     document.getElementById('isToggle').classList.toggle('open');
     var isOpen = document.getElementById('navigation')
     if (isOpen.style.display === "block") {
         isOpen.style.display = "none";
     } else {
         isOpen.style.display = "block";
     }
 };
 
 //Menu Active
 function getClosest(elem, selector) {
 
     // Element.matches() polyfill
     if (!Element.prototype.matches) {
         Element.prototype.matches =
             Element.prototype.matchesSelector ||
             Element.prototype.mozMatchesSelector ||
             Element.prototype.msMatchesSelector ||
             Element.prototype.oMatchesSelector ||
             Element.prototype.webkitMatchesSelector ||
             function (s) {
                 var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                     i = matches.length;
                 while (--i >= 0 && matches.item(i) !== this) { }
                 return i > -1;
             };
     }
 
     // Get the closest matching element
     for (; elem && elem !== document; elem = elem.parentNode) {
         if (elem.matches(selector)) return elem;
     }
     return null;
 
 };
 
 function activateMenu() {
     var menuItems = document.getElementsByClassName("sub-menu-item");
     if (menuItems) {
 
         var matchingMenuItem = null;
         for (var idx = 0; idx < menuItems.length; idx++) {
             if (menuItems[idx].href === window.location.href) {
                 matchingMenuItem = menuItems[idx];
             }
         }
 
         if (matchingMenuItem) {
             matchingMenuItem.classList.add('active');
             var immediateParent = getClosest(matchingMenuItem, 'li');
             if (immediateParent) {
                 immediateParent.classList.add('active');
             }
 
             var parent = getClosest(matchingMenuItem, '.parent-menu-item');
             if (parent) {
                 parent.classList.add('active');
                 var parentMenuitem = parent.querySelector('.menu-item');
                 if (parentMenuitem) {
                     parentMenuitem.classList.add('active');
                 }
                 var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                 if (parentOfParent) {
                     parentOfParent.classList.add('active');
                 }
             } else {
                 var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                 if (parentOfParent) {
                     parentOfParent.classList.add('active');
                 }
             }
         }
     }
 }
 
 // Clickable Menu
 if(document.getElementById("navigation")){
     var elements = document.getElementById("navigation").getElementsByTagName("a");
     for(var i = 0, len = elements.length; i < len; i++) {
         elements[i].onclick = function (elem) {
             if(elem.target.getAttribute("href") === "javascript:void(0)") {
                 var submenu = elem.target.nextElementSibling.nextElementSibling;
                 submenu.classList.toggle('open');
             }
         }
     }
 }
 
 // Menu sticky
 function windowScroll() {
     const navbar = document.getElementById("topnav");
     if(navbar!=null){
         if (
             document.body.scrollTop >= 50 ||
             document.documentElement.scrollTop >= 50
         ) {
             navbar.classList.add("nav-sticky");
         } else {
             navbar.classList.remove("nav-sticky");
         }
     }
 }
 
 window.addEventListener('scroll', (ev) => {
     ev.preventDefault();
     windowScroll();
 })
 
 // back-to-top
 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
    $('#back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
});

 /* ===============================  slick Carousel  =============================== */

 $('.testimonials .slic-item').slick({
    slidesToShow: 1,
    speed: 1000,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    prevArrow: '.testimonials .prev',
    nextArrow: '.testimonials .next',
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
});


$('.home-testim-box .slic-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    dots: false,
    nextArrow: '<button class="carousel-arrow next inverted"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button class="carousel-arrow prev inverted"><i class="fa fa-angle-left"></i></button>',
    autoplay: true
});

$('.home-client-box .slic-item').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    dots: false,
    nextArrow: '<button class="carousel-arrow next inverted"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button class="carousel-arrow prev inverted"><i class="fa fa-angle-left"></i></button>',
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }

  ]
});

$('.trusted-client .slic-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    dots: false,
    autoplay: true,
});

$('.office-slider .slic-item').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    dots: false,
    autoplay: true,
});


/* ===============================  Search  =============================== */

(function($) {
    $(function() {
      $('.search-overlay').click(function() {
        $('aside').toggleClass('open');
      });
      $('.close-search-btn').click(function() {
        $('aside').removeClass();
      });
    });
    
  })(jQuery);

$(document).ready(function() {
    // Find all elements with the class 'pages-list'
    var pagesListDivs = $('.pages-list');

    // Loop through each 'pages-list' element
    pagesListDivs.each(function() {
        var pagesListDiv = $(this);
        // Check if the current 'pages-list' element has children
        if (pagesListDiv.children().length > 0) {
            var firstChild = pagesListDiv.children().first();
            // Check if the first child has the specified class
            if (firstChild.hasClass('wp-block-group__inner-container')) {
                firstChild.addClass('row');
            }
        }
    });
});

  var swiperTestimApp = new Swiper('.resources-slider .swiper-container', {
    slidesPerView: 4,
    speed: 2000,
    spaceBetween: 20,
    autoplay: true,
    centeredSlides: false,
    loop: true,
  
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 15
        }
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  
  });

   // slider

 var swiper = new Swiper(".white-papers-slider", {
   grabCursor: true,
   centeredSlides: false,
   slidesPerView: "auto",
   spaceBetween: 20,
   autoplay: true,
   loop: false,
   slidesPerView: 3.2,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints: {
     560: {
       slidesPerView: 1.2,
     },
     768: {
       slidesPerView: 2.2,
     },
     1024: {
       slidesPerView: 2.2,
     },
   },
 });  
 

 

