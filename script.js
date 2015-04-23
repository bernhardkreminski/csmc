$("#kontakt").hide();
$("#portfolio").hide();

$("#nav li:first-child").click(function () {
    $("#kontakt").hide();
    $("#portfolio").hide();
    $("#ueberuns").hide();
    $("#content").show();
});

$("#link1").click(function () {
    $("#kontakt").hide();
    $("#portfolio").hide();
    $("#ueberuns").show();
    $("#content").hide();
});

$("#link2").click(function () {
    $("#kontakt").hide();
    $("#portfolio").show();
    $("#ueberuns").hide();
    $("#content").hide();
});

$("#link3").click(function () {
    $("#kontakt").show();
    $("#portfolio").hide();
    $("#ueberuns").hide();
    $("#content").hide();
});