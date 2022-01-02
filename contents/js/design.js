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

	/* top 버튼 */
	$(".btn_top").on("click", function(){
		$("body, html").animate({
			scrollTop : 0
		}, 300);
	});
	/* //top 버튼 */

	/* 상세페이지 */
	$(".btn_exhibit").on("click", function(e){
		e.preventDefault();

		$(".floating_layout_area").addClass("show");
	});
	/* //상세페이지 */


	$(window).on('scroll', function() {
		$(".simulation_area").each(function() {
			if($(window).scrollTop() >= $(this).offset().top - 500) {
				$(".f_floating_area").addClass("show");
			}
			else if($(window).scrollTop() == 0){
				$(".f_floating_area").removeClass("show");
			}
		});
	});

	/* sort select */
	$(".btn_sort").on("click", function(){
		$(this).toggleClass("show");
	});
	/* //sort select */

	/* layer pop */
	$(".close_layer, .layer_bg, .close_layer_review").on("click", function(e){
		e.preventDefault();

		$(".layer_pop_area").removeClass("open");
		$(".wrap").removeClass("layer_open");
	});

	$(".layer_open_link").on("click", function(e){
		e.preventDefault();

		var layer_select = $(this).attr("href");

		$(layer_select).addClass("open");
		$(".wrap").addClass("layer_open");
	});
	/* //layer pop */
});