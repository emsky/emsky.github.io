function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("backToTop").style.visibility="visible",document.getElementById("backToTop").style.opacity="1"):(document.getElementById("backToTop").style.visibility="hidden",document.getElementById("backToTop").style.opacity="0")}!function($){var e=$(".menu-toggle"),t=$(".menu-bg"),o=$(".menu"),n=new TimelineMax({paused:!0}),i=$(window).width(),a=$(window).height(),s=Math.hypot(i,a),l=-1*s/2,c=-1*s/2;console.log("hypo = "+s),console.log("margin = "+c),n.to(e,.6,{backgroundPosition:"-1560px 0",ease:SteppedEase.config(26)},"menu-turn").to(t,.7,{height:2*s,width:2*s,scale:1,ease:Power4.easeOut},"-=0.3").to(t,.4,{opacity:"0",ease:Power4.easeIn},"menu-turn").to(t,.1,{visibility:"hidden"}).to(o,.1,{opacity:"1",visibility:"visible",display:"block"},"menu-turn"),e.click(function(){e.hasClass("--active")?(n.reverse(),e.removeClass("--active"),o.removeClass("revealed"),$("html").removeClass("locked")):(n.play(0,!1),e.addClass("--active"),o.addClass("revealed"),$("html").addClass("locked"))})}(jQuery),$(function(){function e(e){jQuery(e).each(function(){var e=jQuery(this),t=e.attr("id"),o=e.attr("class"),n=e.attr("src");jQuery.get(n,function(n){var i=jQuery(n).find("svg");void 0!==t&&(i=i.attr("id",t)),void 0!==o&&(i=i.attr("class",o+" replaced-svg")),i=i.removeAttr("xmlns:a"),e.replaceWith(i)},"xml")})}e('img[src*=".svg"]')});var typed=new Typed(".effect--typed",{strings:["UX Design","Visual Design","Prototyping","Front-end Development","UX Strategy"],typeSpeed:100,backspeed:100,smartBackspace:!0,loop:!0,loopCount:1/0,cursorChar:"_",startDelay:500,backDelay:3e3});window.onscroll=function(){scrollFunction()},$("#backToTop").each(function(){$(this).click(function(){return $("html,body").animate({scrollTop:0},"slow"),!1})});