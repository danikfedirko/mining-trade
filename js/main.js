var width = $( window ).width();

if(width<770){
 $('#grafic').attr('src','img/grafic-mobile.svg')   
}

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