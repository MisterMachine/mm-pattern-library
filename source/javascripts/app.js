var MM = (function() {

  /*global $:false, FB:false */

  return {

    init: function() {

      this.initJS();
      //this.initBumpIt();
      //this.initFoundation();
      //this.initMenuEvents();
      //this.initFacebookShare();
      //this.initTabMasonry();
      //this.initImageMasonry();
      this.initPosition();

    },

    initJS: function() {
      $('body').addClass('js');
    },

    initBumpIt: function() {
      var bumpIt = function() {
        $('body').css('margin-bottom', $('.footer').height());
      },

      didResize = false;
      bumpIt();

      $(window).resize(function() {
        didResize = true;
      });

      setInterval(function() {
        if( didResize ) {
          didResize = false;
          bumpIt();
        }
      }, 250);

    },

    initFoundation: function() {
      $(document).foundation();
    },

    initFacebookShare: function() {
      $('.fb-share').on('click', function() {
        var href = $(this).data('href');
        FB.ui({
          method: 'share',
          href: href,
        });
      });
    },

    initMenuEvents: function() {
      // Click event for mobile menu toggle
      $("a.menu-link.drop").on("click", function toggleMenu(e) {
        e.preventDefault();
        $("nav[role=navigation]").toggleClass("active");
      });

      $( "a.menu-link.show" ).on("click", function() {
        console.log('ouch!');

        $( ".full-nav" ).addClass( "reveal" );
      });

    },

    initTabMasonry: function() {
      // Apply masonry after tab callback
      $('.tabs').on('toggled', function () {
        $('.js-masonry').masonry();
      });
    },

    initImageMasonry: function() {
      var brick = $('.js-image-masonry');
      // initialize Masonry after all images have loaded  
      brick.imagesLoaded( function() {
        brick.masonry();
      });
    },

    initPosition: function() {

      if ( $('#geolocation').length ) {

        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success(pos) {
          var crd = pos.coords;
          $('#latitude').text(crd.latitude);
          $('#longitude').text(crd.longitude);
          $('#accuracy').text(crd.accuracy + ' meters.');
        };

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);

      }

    }

  };
} () );

jQuery(document).ready(function() {
  MM.init();
});


