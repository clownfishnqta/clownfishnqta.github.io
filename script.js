
$(document).ready(function(){
    var offset = 400;
    var duration =500;
    $('.to-top').fadeOut(0);

    $(window).scroll(function(){
     if($(window).scrollTop() >= offset){
     $('.to-top').fadeIn(duration);
    }else{
     $('.to-top').fadeOut(duration);
    }
    });
});