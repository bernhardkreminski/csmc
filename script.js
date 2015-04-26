$("#kontakt").hide();
$("#portfolio").hide();
$("#ueberuns").hide();
$("#home").show();

$("#nav li:first-child").click(function () {
    $("#kontakt").hide();
    $("#portfolio").hide();
    $("#ueberuns").hide();
    $("#home").show();
});

$("#link1").click(function () {
    $("#kontakt").hide();
    $("#portfolio").hide();
    $("#ueberuns").show();
    $("#home").hide();
});

$("#link2").click(function () {
    $("#kontakt").hide();
    $("#portfolio").show();
    $("#ueberuns").hide();
    $("#home").hide();
});

$("#link3").click(function () {
    $("#kontakt").show();
    $("#portfolio").hide();
    $("#ueberuns").hide();
    $("#home").hide();
});