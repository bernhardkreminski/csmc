
/*$(document).ready(function() {
    $(window).scroll(function(){
        $(this).scrollTop(top).scrollLeft(left);
    });
});*/

var onDisplay = $("#home");

function scrollToElement (element) {
    if (!element.is(onDisplay)){
        // get Position of Element
        var xPosition = element.position().top;   
        scrollElement ($('#content'), xPosition, 2);
    }
    else {
        whiteFlash(element, 0.4);    
    }
    onDisplay = element;
}
function scrollElement (element, scrollPosition, duration) {

    // setup CSS transition duration and easing function
    element.css("webkitTransition", duration + 's');
    element.css("transition", duration + 's');
    element.css("webkitTransitionTimingFunction" ,'ease-in-out');
    element.css("TransitionTimingFunction", 'ease-in-out');

    // use translate3d to force hardware acceleration
    element.css("webkitTransform" ,'translate3d(0, ' + -scrollPosition + 'px, 0)');
    element.css("Transform" ,'translate3d(0, ' + -scrollPosition + 'px, 0)');
}
function whiteFlash (element, duration) {
    var normalOp = element.css("opacity");

    element.css("webkitTransition", duration + 's');
    element.css("transition", duration + 's');
    element.css("webkitTransitionTimingFunction" ,'ease-in-out');
    element.css("TransitionTimingFunction", 'ease-in-out');

    // use translate3d to force hardware acceleration
    element.css("opacity" , 0.8);
    setTimeout(function(){
        element.css("opacity", normalOp);
    }, duration * 1000);
}

