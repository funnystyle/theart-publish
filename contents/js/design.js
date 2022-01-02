/* 스크롤시 header */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav_down').addClass('nav_up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav_up').addClass('nav_down');
        }
    }
    
    lastScrollTop = st;
}
/* //스크롤시 header */


$(document).ready(function(){

	/* gnb */
	var burger = $('.btn_gnb');

	burger.each(function(index){
		var $this = $(this);
		
		$this.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$("body").toggleClass("open");

			$(".gnb_list > li").removeClass("on");
		})
	});

	$(".gnb_bg").on("click", function(){
		$("body").removeClass("open");
		$(".btn_gnb").removeClass('active');
	});
	/* //gnb */

	/* tab */
	$(".tab_list li a").on("click", function(e){
		e.preventDefault();

		$(".info_notice_area").removeClass("on");
		$(".tab_list li a").removeClass("on");

		var link = $(this).attr("href");
		$(link).addClass("on");
		$(this).addClass("on");
	});
	/* //tab */
});