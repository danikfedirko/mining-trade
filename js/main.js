var width = $( window ).width();

if(width<770){
 $('#grafic').attr('src','img/grafic-mobile.svg')   
}
$( ".cd-block-1 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/1-color.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-2 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/2-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-3 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/3-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-4 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/4-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-5 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/5-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-6 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/6-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/num7.svg')
    });
$( ".cd-block-7 .cd-timeline-content" )
    .mouseenter(function() {
        $(".cd-block-7 .cd-timeline-img img").attr('src','img/7-color.svg')
        $(".cd-block-1 .cd-timeline-img img").attr('src','img/num1.svg')
        $(".cd-block-2 .cd-timeline-img img").attr('src','img/num2.svg')
        $(".cd-block-3 .cd-timeline-img img").attr('src','img/num3.svg')
        $(".cd-block-4 .cd-timeline-img img").attr('src','img/num4.svg')
        $(".cd-block-5 .cd-timeline-img img").attr('src','img/num5.svg')
        $(".cd-block-6 .cd-timeline-img img").attr('src','img/num6.svg')
    });
$( ".fb-social" )
    .mouseenter(function() {
        $(".fb-social img").attr('src', 'img/fb-color.svg')
    })
            .mouseleave(function() {
                $(".fb-social img").attr('src', 'img/facebook.svg')
});

$( ".tw-social" )
    .mouseenter(function() {
        $(".tw-social img").attr('src', 'img/twitter-color.svg')
    })
    .mouseleave(function() {
        $(".tw-social img").attr('src', 'img/twitter.svg')
    });
$( ".in-social" )
    .mouseenter(function() {
        $(".in-social img").attr('src', 'img/insta-color.svg')
    })
    .mouseleave(function() {
        $(".in-social img").attr('src', 'img/insta.svg')
    });
$( ".tg-social" )
    .mouseenter(function() {
        $(".tg-social img").attr('src', 'img/telegram-color.svg')
    })
    .mouseleave(function() {
        $(".tg-social img").attr('src', 'img/telegram.svg')
    });