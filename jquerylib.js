$("#growing").animate({fontSize: '50px'});

$("#slide1").click(function() {
    $(this).hide();
    $("#slide2").show();
});

$("#slide2").click(function() {
    $(this).hide();
    $("#slide3").show();
});

$("#slide3").click(function() {
    $(this).hide();
    $("#slide4").show();
});

$("#slide4").click(function() {
    $(this).hide();
    $("#slide5").show();
});