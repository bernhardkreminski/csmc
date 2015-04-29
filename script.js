    function scrollToElement (element) {
        var xPosition = element.position().top;   
        scrollElement ($('#content'), xPosition, 2);
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

