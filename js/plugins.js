// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//countdown
var countDownDate = new Date("Oct 1, 2017 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (days.toString().length == 1) {
            $('.days').html('0'+days)
        }    
  else{$('.days').html(days)}
if (minutes.toString().length == 1) {
            $('.minutes').html('0'+minutes)
        }
    else{  $('.minutes').html(minutes)}
if (hours.toString().length == 1) {
            $('.hours').html('0'+hours)
        }
    else{$('.hours').html(hours)}
    
if (seconds.toString().length == 1) {
            $('.seconds').html('0'+seconds)
        }
    else{$('.seconds').html(seconds)}
})
