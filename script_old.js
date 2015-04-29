$(document).ready(function(){
    var isShown = $("#home");
    $("#kontakt").hide();
    $("#portfolio").hide();
    $("#ueberuns").hide();
    $("#home").show();

    $("#nav li:first-child").click(function () {
        moveDown(isShown,$("#home"));
    });

    $("#link1").click(function () {
        moveDown(isShown,$("#ueberuns"));
    });

    $("#link2").click(function () {
        moveDown(isShown,$("#portfolio"));
    });

    $("#link3").click(function () {
        moveDown(isShown,$("#kontakt"));
    });
    
    function moveDown (object1, object2) {
        if(object1.is(object2)){
            var img = object1.find("img");
            img.animate(
            {   
                opacity: "0.4",
                filter: "alpha(opacity=40)"
            },
            300, 
            function() { 
            img.animate(
                {   
                opacity: "1",
                filter: "alpha(opacity=100)"
                },
                300)});
        }
        else{
        isShown = object2;
        object2.css("top","-100%");
        object2.show();
        object1.animate(
            {
                top: "+=100%"
            },
            2000,
            function(){
                object1.hide();}
        );
        object2.animate(
            {
                top: "+=100%"
            },
            2000
            );
        }
    };

});