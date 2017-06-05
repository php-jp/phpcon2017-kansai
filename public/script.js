$(function(){
    setTimeout(blink,7000);
    setTimeout(blink,13000);
})

var blink = function(){
    $(".sprite").addClass("blink")
    setTimeout(blinkOff,800)

}

var blinkOff = function(){
    $(".sprite").removeClass("blink")
    setTimeout(blink,5000)

}

var app = app || {}

app.device = (function  () {
    var ww = $(window).width()
    return device = (ww > 768)
        ? "PC"
        : "SP"
}());

app.NAVHEIGHT = (function  () {
    return app.device === "PC"
        ? 60
        : 50
}())

app.menu = (function () {
    var $nav = $("#nav")
    var targetList = $nav.find('li'); 
    $('#header .header_menu').on('click',function () {
        
        if ($nav.hasClass('is-open')) {
            $('#nav li').removeClass('active')
        }else {
            var index = 0;
            var id = setInterval(function() {
                targetList.eq(index).addClass('active')
                index++;
                if (targetList.length < index) {
                    clearInterval(id)                
                }
            }, 100);   
        }
        $(this).toggleClass("is-open");
        $nav.toggleClass("is-open");
        $("#ATField").toggleClass('is-open');
    });
    $("#nav li a").on('click',function  () {
        $("#header .header_menu").toggleClass("is-open");
        $nav.removeClass("is-open");
        $("#ATField").removeClass('is-open');
        $('#nav li').removeClass('active')
    })
    $("#ATField").on('click',function  () {
        $(this).removeClass("is-open")
        $("#header .header_menu").toggleClass("is-open");
        $nav.removeClass("is-open");
        $('#nav li').removeClass('active')
    })
}())

app.smooth =(function  () {
    $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - app.NAVHEIGHT;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}())

app.zou = (function  () {
    $(window).on("load resize",function  () {
        var position = $("#footer").position();
        var top = Math.floor(position.top);
        $(window).on("scroll", function() {
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((top - scrollPosition) / top < 0) {
                if (!$("#pageTop").hasClass('active')) {
                    $("#pageTop").addClass('active')
                }
            }else {
                $("#pageTop").removeClass('active')
            }
        });
    })
}())
