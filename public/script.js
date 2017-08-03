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

$(function(){
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

    app.zou = (function  () {
        $(window).on("load resize",function  () {
            var position = $("#footer").position();
            var top = Math.floor(position.top);
            $(window).on("scroll", function() {
                var scrollPosition = $(window).height() + $(window).scrollTop();
                if ((top - scrollPosition) / top < 0) {
                    if (!$("#lt_notice").hasClass('active')) {
                        $("#lt_notice").addClass('active')
                    }
                }else {
                    $("#lt_notice").removeClass('active')
                }
            });
        })
    }())

    app.readmore = (function () {
        var t = ["READ MORE","CLOSE"]
        $('#secTimetable .readmore').on('click',function () {
            $targets = $(this).parents(".section").find(".readmore")
            if ($(this).hasClass("active")) {
                $targets.text(t[0])
                $(this).parents(".section").find(".more").slideToggle();
                $targets.removeClass("active")
            }else {
                for(var i = 0;$("#secTimetable .section").length > i;i++){
                    var tar = $("#secTimetable .section").eq(i);
                    $_targets = $(tar).find(".readmore.active")
                    if($_targets.length){
                        $_targets.text(t[0])
                        $(tar).find(".more").slideToggle();
                        $_targets.removeClass("active")
                    }
                }
                $targets.text(t[1])
                $(this).parents(".section").find(".more").slideToggle();
                $targets.addClass("active")
            }
        })
    }())

    /**
     * PC版のみ高さをそろえる。
     * timetable Sections がcolumn 担っているので、
     * index をベースに擬似 Row を生成していく。
     */
    app.syncHeight = (function () {
        $(window).on('load resize',function () {
            dealEachRow(0)
            dealEachRow(1)
            dealEachRow(2)
            dealEachRow(3)
            dealEachRow(4)
            dealEachRow(5)
            dealEachRow(6)
            dealEachRow(7)
            dealEachRow(8)
        })
    }())

    var dealEachRow = function(i){

        $targets = [
            $("#secTimetable .secTimetable_sections:eq(0) .section:eq("+i+") h2"),
            $("#secTimetable .secTimetable_sections:eq(1) .section:eq("+i+") h2"),
            $("#secTimetable .secTimetable_sections:eq(2) .section:eq("+i+") h2"),
            $("#secSession .secSession_sections:eq(0) .section:eq("+i+") h2"),
            $("#secSession .secSession_sections:eq(1) .section:eq("+i+") h2"),
            $("#secSession .secSession_sections:eq(2) .section:eq("+i+") h2"),
        ];
        var maxHeight = 0;
        for(var index in $targets){
            $targets[index].css("height","auto");
            maxHeight = Math.max($targets[index].height(),maxHeight)
        }
        for(var index in $targets){
            $targets[index].css("height",maxHeight);
        }

        $targets = [
            $("#secTimetable .secTimetable_sections:eq(0) .section:eq("+i+") p.show"),
            $("#secTimetable .secTimetable_sections:eq(1) .section:eq("+i+") p.show"),
            $("#secTimetable .secTimetable_sections:eq(2) .section:eq("+i+") p.show"),
            $("#secSession .secSession_sections:eq(0) .section:eq("+i+") .session_slide"),
            $("#secSession .secSession_sections:eq(1) .section:eq("+i+") .session_slide"),
            $("#secSession .secSession_sections:eq(2) .section:eq("+i+") .session_slide"),
        ];
        var maxHeight = 0;
        for(var index in $targets){
            $targets[index].css("height","auto");
            maxHeight = Math.max($targets[index].height(),maxHeight)
        }
        for(var index in $targets){
            $targets[index].css("height",maxHeight);
        }
        $targets = [
            $("#secTimetable .secTimetable_timeline .time:eq("+i+")"),
            $("#secTimetable .secTimetable_sections:eq(0) .section:eq("+i+")"),
            $("#secTimetable .secTimetable_sections:eq(1) .section:eq("+i+")"),
            $("#secTimetable .secTimetable_sections:eq(2) .section:eq("+i+")"),
            $("#secSession .secSession_timeline .time:eq("+i+")"),
            $("#secSession .secSession_sections:eq(0) .section:eq("+i+")"),
            $("#secSession .secSession_sections:eq(1) .section:eq("+i+")"),
            $("#secSession .secSession_sections:eq(2) .section:eq("+i+")"),
        ];
        var maxHeight = 0;
        for(var index in $targets){
            $targets[index].css("height","auto");
            maxHeight = Math.max($targets[index].height(),maxHeight)
        }
        for(var index in $targets){
            if($targets[index].hasClass("time") || $targets[index].hasClass("sectionEmpty"))
                $targets[index].css("height",maxHeight);
        }
    }

    app.spToggle = (function  () {
        $('#secTimetable .secTimetable_sp_contents .time').on('click',function () {
            $(this).next().slideToggle();
            $(this).toggleClass("active")
        })
        $('#secSession .secSession_sp_contents .time').on('click',function () {
            $(this).next().slideToggle();
            $(this).toggleClass("active")
        })
    }())
})
