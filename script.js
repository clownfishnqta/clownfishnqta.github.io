
$(document).ready(function(){
       
    $(this).scrollTop(0);
   
    var offset = 400;
    var duration =1000;
    $('.to-top').fadeOut(0);

    $(window).scroll(function(){
     if($(window).scrollTop() >= offset){
     $('.to-top').fadeIn(duration);
    }else{
     $('.to-top').fadeOut(duration);
    }
    });
});