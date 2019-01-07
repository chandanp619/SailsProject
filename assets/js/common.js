jQuery(function(){
jQuery('.banner').height((window.innerHeight)+'px');

});
jQuery(window).on('scroll',function(e){
    if(scrollY > 100){
        jQuery('.header').addClass('fixed');
    }else{
        jQuery('.header').removeClass('fixed');
    }
})

