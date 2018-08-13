(function($){

var $navbtn = $(".menu-toggle");
var $navbg = $('.menu-bg');
var $nav = $('.menu');
var tl = new TimelineMax({paused: !0});
var w = $(window).width()
var h = $(window).height()
var r = Math.hypot(w,h)
var moveX = (-1) * r/2
var moveY = (-1) * r/2

console.log("hypo = " + r)
console.log("margin = " + moveY)

tl.to($navbg, .4, {height: 2*r, width: 2*r, scale: 1, ease: Power4.easeOut}, 'menu-turn')
  .to($navbtn, .6, { backgroundPosition: "-1560px 0", ease: SteppedEase.config(26)}, '-=.35')
  //.to($navbg, .7, { transform: "translate3d(moveX, moveY, 0)", ease: Power4.easeOut }, 'menu-turn')
  .to($nav, .5, { opacity: "1", visibility: "visible", display: "block"}, '-=0.3')
  .to($navbg, .2, { opacity: "0", ease: Power4.easeIn})
  .to($navbg, .2, { visibility: "hidden"});
  // menu items


$navbtn.click(function() {
    //$('.bottom-container').toggle();
    $navbtn.hasClass("--active") ? (tl.reverse(),
    $navbtn.removeClass("--active"), $nav.removeClass("revealed"), $("html").removeClass("locked")) :
    (tl.play(0, !1),
    $navbtn.addClass("--active"), $nav.addClass("revealed"), $("html").addClass("locked"))
});

$('.project-shot a').hover(function(){
      $(this).siblings('.project-mono').animate({
        'opacity': '.8',
        'top': '-=2px'
      }, 250)
    },
    function(){
      $(this).siblings('.project-mono').animate({
        'opacity': '.1'
      }, 250)
    });

$('.button-hear').click(function(){
  $('#pronounce')[0].play();
});

})(jQuery);

$(function(){
    activate('img[src*=".svg"]');

    function activate(string){
        jQuery(string).each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');
        });
    }


});

/*
var typed = new Typed('.effect--typed', {
    strings: ["UX Design", "Visual Design", "Prototyping", "Front-end Development", "UX Strategy"],
    typeSpeed: 100,
    backspeed:100,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    cursorChar: "_",
    startDelay: 500,
    backDelay: 3000

  }); */

  if ($(".effect--typed")[0]){
    var typed = new Typed('.effect--typed', {
        strings: ["UX Design", "UX Strategy", "UX Research", "UI Design", "Front-end Development"],
        typeSpeed: 100,
        contentType: 'text',
        backSpeed: 50,
        highlight: true,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
        cursorChar: "_",
        startDelay: 500,
        backDelay: 3000

      })
  } else {
      // Do something if class does not exist
  }




  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("backToTop").style.visibility = "visible";
          document.getElementById("backToTop").style.opacity = "1";
      } else {
          document.getElementById("backToTop").style.visibility = "hidden";
          document.getElementById("backToTop").style.opacity = "0";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  $('#backToTop').each(function(){
    $(this).click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
      $('.nav__logo').removeClass('fade-in').addClass('fade');
      console.log('near bottom!')
   } else {
      $('.nav__logo').removeClass('fade').addClass('fade-in');
      console.log('beaming up!')
   }
});


$('#personalLogo').on('load', function(){
  // hide/remove the loading image
  $('.nav__logo').delay(2000).css('opacity', '1');
});

var $card = $('.card');

var tl = new TimelineMax({repeat: -1});

 tl.set($card, {rotationX: 20, rotationY: -25, rotationZ: -3})
.to($card, 3, {rotationX: 5, rotationY: -15, rotationZ: -2})
.to($card, 3, {rotationX: 20, rotationY: -25, rotationZ: -3});
