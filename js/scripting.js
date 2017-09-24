$(document).ready(function () {

	// document.addEventListener("touchstart", function(){}, true);

	var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

	if (touch) { // remove all :hover stylesheets
	    try { // prevent exception on browsers not supporting DOM styleSheets properly
	        for (var si in document.styleSheets) {
	            var styleSheet = document.styleSheets[si];
	            if (!styleSheet.rules) continue;

	            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	                if (!styleSheet.rules[ri].selectorText) continue;

	                if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                    // styleSheet.deleteRule(ri);
	                }
	            }
	        }
	    } catch (ex) {}
	}

	$(".sandwish").on("click", function(){
		$(".header .menu").toggleClass("extend");
		$(".header .bg .rect").toggleClass("extend");
		$("body > div > div.mainContent").toggleClass("topMargin");
		$(".logo img:last-child").toggleClass("sLogo");
		$(".logo img:first-child").toggleClass("hLogo");

		// $(".overlay").toggleClass("show");
		$(".sandwish .bar:first-child").toggleClass("rotateCW");
		$(".sandwish .bar:nth-child(2)").toggleClass("rAway");
		$(".sandwish .bar:last-child").toggleClass("rotateCCW");

	});


	$(".slider").slick({
		dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  // adaptiveHeight: true,
  		autoplay: true,
  		autoplaySpeed: 2000
	});

});