//preloader js window.load
$(window).load(function(){
            setTimeout(function(){
                $('#preloader').velocity({
                    opacity : 0.1,
                    translateY: "-80px"
                }, {
                    duration: 600,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 600,
                    easing: [0.7,0,0.3,1],
                    complete: function(){
                        $('.home').addClass('animate-border divide');
                    }
                })  
                    }
                })
            },1000)
        });



var SPY = function() {
  function e(a, d, b) {
    var c, f, g, h;
    b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
      d.innerHTML = g + String.fromCharCode(c);
      c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
        e(a, d, b);
      }, 8)) : c++;
    }, 15));
  }
  var k = {};
  return k = {animationComplete:!1, text:function(a) {
    this.animationComplete = !1;
    a = document.getElementById(a);
    for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
      b.push(d.charCodeAt(c));
    }
    a.innerHTML = "";
    e(b, a, 0);
  }};
}();


$( 'document' ).ready(function() {
  
  // Hide header
  $( '.header' ).hide();
  // Transition background
  $( '.london' ).fadeIn( 1200 );
  
  
  // Timeout for crypto text
  setTimeout( function() { 
    $( '.header' ).fadeIn( 'slow' );
      SPY.text( 'op' );
  }, 1000);

  
});


//Type writing effect in about me

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };
  //type writing ends here follow by window.onload
  
  //::Here is Carousel JS  
  
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});


//tpye wirting onload function.
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

    };