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

tl.to($navbtn, .6, { backgroundPosition: "-1560px 0", ease: SteppedEase.config(26)}, 'menu-turn')
  .to($navbg, .7, {height: 2*r, width: 2*r, scale: 1, ease: Power4.easeOut}, '-=0.3')
  //.to($navbg, .7, { transform: "translate3d(moveX, moveY, 0)", ease: Power4.easeOut }, 'menu-turn')
  .to($navbg, .4, { opacity: "0", ease: Power4.easeIn}, 'menu-turn')
  .to($navbg, .1, { visibility: "hidden"})
  .to($nav, 0.1, { opacity: "1", visibility: "visible", display: "block"}, 'menu-turn');
  // menu items


$navbtn.click(function() {
    $navbtn.hasClass("--active") ? (tl.reverse(),
    $navbtn.removeClass("--active"), $nav.removeClass("revealed"), $("html").removeClass("locked")) :
    (tl.play(0, !1),
    $navbtn.addClass("--active"), $nav.addClass("revealed"), $("html").addClass("locked"))
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

  });


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
