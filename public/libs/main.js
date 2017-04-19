var customScripts = {
    scrollAnchors: function () {

        // SCROLL SCRIPTS
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutQuad');
            event.preventDefault();
        });

    },
    wowScrolls: function () {

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();

    },
    headroom: function () {

        var header = document.querySelector("#header");
		if(window.location.hash) {
		  header.classList.add("slide--up");
		}

		new Headroom(header, {
			tolerance: {
			  down : 10,
			  up : 20
			},
			offset : 560,
			classes: {
			  initial: "slide",
			  pinned: "slide--reset",
			  unpinned: "slide--up"
			},
			// callback when pinned, `this` is headroom object
			onPin : function() {},
			// callback when unpinned, `this` is headroom object
			onUnpin : function() {},
			// callback when above offset, `this` is headroom object
			onTop : function() {},
			// callback when below offset, `this` is headroom object
			onNotTop : function() {}
		}).init();

    },
    scrollTop: function () {

       $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
       });

       // go to anchor when clicked
        $(function () {
            $('a[href*=#]:not([id=game])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        $('.parallax').parallax();

        $('.modal-trigger').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            ready: function() {  }, // Callback for Modal open
            complete: function() {  } // Callback for Modal close
        });

        $('.scrollspy').scrollSpy();



    },
    intro: function () {
        $(".loader").delay(2000).fadeOut(1000);
        $(".button-collapse").sideNav();
    },
    swipeItBox: function () {
        $( '.swipebox' ).swipebox({loopAtEnd: true});
    },
    init: function () {
        customScripts.intro();
        customScripts.scrollTop();
        customScripts.wowScrolls();
        customScripts.headroom();
        customScripts.swipeItBox();

    }
};
$('document').ready(function () {
    customScripts.init();
});