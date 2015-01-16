$(function() {
    $("#introContent").hide();
    $("#whatContent").hide();
    $("#intro").click(function (evt) {
        evt.preventDefault();
        $("#introContent").toggle();
    });
    $("#what").click(function (evt) {
        evt.preventDefault();
        $("#whatContent").toggle();
    });
   
   
});