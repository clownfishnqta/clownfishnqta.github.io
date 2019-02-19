
$(document).ready(function(){
    var offset = 400;
    var duration =500;
    
    $(window).scroll(function(){
     if($(window).scrollTop() >= offset){
     $('.to-top').fadeIn(1000);
    }else{
     $('.to-top').fadeOut(duration);
    }
    });
});