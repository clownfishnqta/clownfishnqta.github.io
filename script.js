$(document).ready(function() {
    $(this).scrollTop(0);

    var iOffset = 400,
        iDuration = 1000;
    $('.to-top').fadeOut(0);

    $(window).scroll(function(){
        if ($(window).scrollTop() >= iOffset) {
            $('.to-top').fadeIn(iDuration);
        } else {
            $('.to-top').fadeOut(iDuration);
        }
    });
});