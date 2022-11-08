// global $,alert,console

$(function(){
    'use strict';

 // adjust header height

var header = $(".header");

var bxslider = $(".bxslider");


header.height($(window).height());


$(window).resize(function(){


     // adjust header height

    header.height($(window).height());


    
// adjust bxslider list item center

    bxslider.each(function(){

        $(this).css("paddingTop",($(window).height() - $(".bxslider li").height() )/2);
    
    
    });
    

});


// links add active class
$(".links li a").click(function(){

$(this).parent().addClass("active").siblings().removeClass("active");

});



// trigger the bx slider
bxslider.bxSlider({
    pager:false
});

// adjust bxslider list item center

bxslider.each(function(){

    $(this).css("paddingTop",($(window).height() - $(".bxslider li").height() )/2);
});




//  smooth scroll to div
$(".links li a").click(function(){

    $('html , body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top 
    },1000)


});


// our auto slider code
//self invoke  = automatic

(function autoSlider(){

    $('.slider .active').each(function(){

        if(!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass("active").next().addClass("active").fadeIn();

                autoSlider();
            });
        }else{
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass("active");

            $('.slider div').eq(0).addClass("active").fadeIn();
            
            autoSlider();

        });
    };

});

}());

// trigger nice scroll

$('html').niceScroll({
    cursorcolor:'var(--main-color)',
    cursorwidth: '10px',
    cursorborder:'1px solid var(--main-color)',
});

// trigger MixitUp

    $('#container').mixItUp();

    
// adjust shuffle links
$('.shuffle li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
})



   
});