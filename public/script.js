$(function(){
    setTimeout(blink,7000);
    setTimeout(blink,13000);
})

var blink = function(){
    console.log("blink on")
    $(".sprite").addClass("blink")
    setTimeout(blinkOff,800)

}

var blinkOff = function(){
    console.log("blink off")
    $(".sprite").removeClass("blink")
    setTimeout(blink,5000)

}

