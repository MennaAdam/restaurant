$(function () {

            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $(".change").css({
                        "background": "white",
                        "boxShadow": "0px -2px 3px"
                    });
                    $(".change").removeClass("py-30");
                    $(".nav-link").css("color", "#333");
                    $(".navbar-brand").css("color", "#333");
                } else {
                    $(".change").css({
                        "background": "transparent",
                        "boxShadow": "0px -2px 3px"
                    });
                    $(".change").addClass("py-30");
                    $(".nav-link").css("color", "white");
                    $(".navbar-brand").css("color", "#fff");
                }
            });

// Smoth Scroll

$(".nav-link[href*='#']").on("click", function (){
    $("html, body").animate({
        scrollTop : $($(this).attr("href")).offset().top - 20
    }, 1000)
});


// Adjust Active Class
$(".navbar-nav li").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
});

// Counter
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: 10000,
            easing: 'swing',
            step: function() {
                $(this).text(Math.ceil(this.Counter));
            }
        });
});
});
