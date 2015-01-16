$(function() {
    $("#introContent").hide();
    $("#whatContent").hide();
    $("#whoContent").hide();

    $("#intro").click(function (evt) {
        evt.preventDefault();
        $("#introContent").toggle();
        
    });

    $("#what").click(function (evt) {
        evt.preventDefault();
        $("#whatContent").toggle();
    });

    $("#whoI").click(function (evt) {
        evt.preventDefault();
        $("#whoContent").toggle();
    });
   
   
});