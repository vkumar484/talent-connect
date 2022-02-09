$(document).ready(function(){
    
    var owl = $('.slider-2');
owl.owlCarousel();
// Go to the next item
$('.next-btn-1').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-btn-1').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

    
});




$('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// slider--talent clips
$(document).ready(function(){
var owl = $('.slider-1');
owl.owlCarousel();
// Go to the next item
$('.next-btn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-btn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
    });


$('.slider-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});




$('.slider-3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(document).ready(function(){
var owl = $('.slider-3');
owl.owlCarousel();
// Go to the next item
$('.next-btn-2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-btn-2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
    });

