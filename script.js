$(document).ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 900) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
});