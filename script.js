   
//****************************
// Magemneu Tabs
//****************************
document.querySelectorAll('#myTab a').forEach(function(everyitem){ 	
	
	var tabTrigger = new bootstrap.Tab(everyitem)
	everyitem.addEventListener('mouseenter', function(){
		tabTrigger.show();
	});
	
});

document.querySelectorAll('#myTab2 a').forEach(function(everyitem){ 	
	
	var tabTrigger = new bootstrap.Tab(everyitem)
	everyitem.addEventListener('mouseenter', function(){
		tabTrigger.show();
	});
	
});

// select all the buttons with the class name "btn"
    const lnks = document.querySelectorAll(".nav-link");

    // loop through each button and add a click event listener
    lnks.forEach(function(lnks) {
     lnks.addEventListener("click", function() {
        // do something when the lnks is clicked
        var href = $(this).attr('href');
        window.location=href;
     });
    });

var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}

$(".has-submenu").hover(
  function () {
    $(".sticky").addClass("menu-header-bg");
  },
  function () {
    $(".sticky").removeClass("menu-header-bg");
  }
);

$(".parent-parent-menu-item").mouseenter(function() {
     $(".megamenu-overlay").show();
    });
$(".parent-parent-menu-item").mouseleave(function() {
    $(".megamenu-overlay").hide();
}
);

// magnificPopup img view
$(".popup-image").magnificPopup({
	type: "image",
	gallery: {
		enabled: true,
	},
});

// magnificPopup video view
$(".popup-video").magnificPopup({
	type: "iframe",
});

// tabs with accordion 

tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}


// image scroll img view

const growTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#grow",
    scrub: 1.5,
    start: "top center",
    end: "+=400",
    ease: "power1.out"
  }
});
growTl.to("#grow", {
  duration: 1,
  scale: 1
});
growTl.to("#grow-tagline", {
  duration: 0.4,
  delay: -0.7,
  opacity: 1,
  y: 0
});



//****************************
// Mobile Menu
//****************************


(function($) {
  var defaults = {
    "hamburgerId": "sm_menu_ham", //Hamburger Id
    "wrapperClass": "sm_menu_outer", //Menu Wrapper Class
    "submenuClass": "submenu", //Submenu Class
    "menuStyle": "slide", //Menu Style
    "onMenuLoad": function() { return true; }, //Calls when menu loaded
    "onMenuToggle": function() { return true; } //Calls when menu open/close
  };
  $.fn.simpleMobileMenu = function(options) {
    if (this.length === 0) { return this; }
    var smMenu = {},
        ds = $(this);
    var init = function() {
      smMenu.settings = $.extend({}, defaults, options);
      smMenu.styleClass = smMenu.settings.menuStyle.toLowerCase() === 'slide' ? "slide" : "accordion";
      // Create Wrapper div & hamburger
      createWrapper_Ham();
      // Create Back Menu for each sub menu
      createBackButton();
      // Callback - Menu loaded
      if (typeof smMenu.settings.onMenuLoad == 'function') {
        smMenu.settings.onMenuLoad(ds);
      }
    },
    createWrapper_Ham = function() {
      smMenu.hamburger =  $("<div/>", {
                            "id": smMenu.settings.hamburgerId,
                            "html": "<span></span><span></span><span></span><span></span>"
                          }),
      smMenu.smmOuter = $("<div/>", { "class": smMenu.settings.wrapperClass+" "+smMenu.styleClass });
      ds.appendTo(smMenu.smmOuter);
      smMenu.hamburger.add(smMenu.smmOuter).appendTo($("body"));
    },
    createBackButton = function() {
      smMenu.smmOuter.find("ul." + smMenu.settings.submenuClass).each(function() {
        var dis = $(this),
          disPar = dis.closest("li"),
          disfA = disPar.find("> a"),
          disBack = $("<li/>", {
            "class": "back",
            "html": "<a href='#'>" + disfA.text() + "</a>"
          })
        disPar.addClass("hasChild");
        if(smMenu.settings.menuStyle.toLowerCase() === 'slide') {
          disBack.prependTo(dis);
        }
      });
    },
    toggleMobileMenu = function(e) {
      $("#" + smMenu.settings.hamburgerId).toggleClass("open");
      $("." + smMenu.settings.wrapperClass).toggleClass("active").find("li.active").removeClass("active");
      $("body").toggleClass("mmactive");
      if(smMenu.settings.menuStyle.toLowerCase() === 'accordion') {
        $("."+smMenu.settings.wrapperClass).find("ul."+smMenu.settings.submenuClass).hide();
      }
      // Callback - Menu Toggle
      if (typeof smMenu.settings.onMenuToggle == 'function') {
        smMenu.settings.onMenuToggle(ds, $("#" + smMenu.settings.hamburgerId).hasClass("open"));
      }
    },
    showSlideSubMenu = function(e) {
      $("." + smMenu.settings.wrapperClass).scrollTop(0);
      $(this).parent().addClass("active").siblings().removeClass("active");
    },
    showAccordionSubMenu  = function(e) {
      e.preventDefault();
      var dis = $(this),
          dispar = $(this).parent(),
          lastActive =  dispar.siblings(".active");
      dispar.find("> ."+smMenu.settings.submenuClass).slideToggle(function() {
        if ($(this).is(":visible")) { 
          var offset = dis[0].offsetTop;
          $("." + smMenu.settings.wrapperClass).stop().animate({ scrollTop: offset }, 300);
        }
      });
      lastActive.find("ul."+ smMenu.settings.submenuClass).slideUp(function() {
        $(this).find(".hasChild").removeClass("active");
      })
      dispar.toggleClass("active").siblings().removeClass("active");
    },
    goBack = function(e) {
      e.preventDefault();
      $(this).closest("ul." + smMenu.settings.submenuClass).parent().removeClass("active");
    }
    /*Init*/
    init();
    /* Open Menu */
    smMenu.hamburger.click(toggleMobileMenu);
    /* Show Slide SubMenu */
    smMenu.smmOuter.filter(".slide").find("li.hasChild > a").click(showSlideSubMenu);
    /* Show Accordion SubMenu */
    smMenu.smmOuter.filter(".accordion").find("li.hasChild > a").click(showAccordionSubMenu);
    /* Go Back */
    smMenu.smmOuter.find("li.back a").click(goBack);
  };
})(jQuery)

$(document).ready(function() {
  $(".mobile_menu").simpleMobileMenu({
      onMenuLoad: function(menu) {
          console.log(menu)
          console.log("menu loaded")
      },
      onMenuToggle: function(menu, opened) {
          console.log(opened)
      },
      "menuStyle": "slide"
  });
})


//****************************
// Sticky Menu
//****************************

var div_top = $('.inner-menu').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.inner-menu').is('.sticky')) {
            $('.inner-menu').addClass('sticky');
        }
    } else {
        $('.inner-menu').removeClass('sticky');
    }
});

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active-inner');
      sections.removeClass('active-inner');
      
      $(this).addClass('active-inner');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-inner');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - 150
  }, 500);
  
  return false;
});


var swiperTestimApp = new Swiper('.offering-slider .swiper-container', {
  slidesPerView: 1.2,
  centeredSlides : true,
  spaceBetween: 15,
  slidesOffsetBefore : 0,
  speed: 2000,
  autoplay: false,
  loop: true,

  breakpoints: {
      320: {
          slidesPerView: 1,
          slidesOffsetBefore : 0,
          spaceBetween: 20
      },
      640: {
          slidesPerView: 1,
          slidesOffsetBefore : 0,
          spaceBetween: 20
      },
      767: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesOffsetBefore : 0,
          centeredSlides: false,
      },
      991: {
        slidesPerView: 1.2,
        centeredSlides : true,
        spaceBetween: 15,
        slidesOffsetBefore : 0
      }
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },

});