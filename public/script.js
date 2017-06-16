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

app.readmore = (function () {
    var t = ["READ MORE","CLOSE"]
    $('#secTimetable .speaker .readmore').on('click',function () {
        if ($(this).hasClass("active")) {
            $(this).text(t[0])                        
        }else {
            $(this).text(t[1])
        }
        $(this).prev().slideToggle();
        $(this).toggleClass("active")
    })
    $('#secTimetable .session .readmore').on('click',function () {

        if (!$(this).hasClass("active")) {
            $("#secTimetable .secTimetable_sections .session p:not(.show)").slideUp()
            $("#secTimetable .secTimetable_sections .speaker .detail").slideUp()
            $("#secTimetable .secTimetable_sections .readmore").removeClass("active")
            $("#secTimetable .secTimetable_sections .readmore").text(t[0])           
        }

        if ($(this).hasClass("active")) {
            $(this).text(t[0])
            $(this).prev().find("p:not(.show)").slideToggle();
            $(this).toggleClass("active")
        }else {
            $(this).text(t[1])
            $(this).prev().find("p:not(.show)").slideToggle();
            $(this).toggleClass("active")
        }
    })
}())

/**
 * PC版のみ高さをそろえる。
 * timetable Sections がcolumn 担っているので、
 * index をベースに擬似 Row を生成していく。
 */
app.syncHeight = (function () {
    var target = [
        $("#secTimetable .secTimetable_sections .session h2"),
        $("#secTimetable .secTimetable_sections .session p.show"),
    ]
    $(window).on('load resize',function () {
        for (var i = 0; i < target.length; i++) {
            var maxHeight = 0;
            target[i].removeAttr("style")
            target[i].each(function(){ if ($(this).height() > maxHeight) { maxHeight = $(this).height(); } });
            target[i].css('height',maxHeight)
        }
        var height = $("#secTimetable .secTimetable_sections .section").height()
        $("#secTimetable .secTimetable_timeline .time").css('height',height)
        $("#secTimetable .secTimetable_sections .sectionEmpty").css('height',height)
    })
}())

app.spToggle = (function  () {
    $('#secTimetable .secTimetable_sp_contents .time').on('click',function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active")
    })
}())