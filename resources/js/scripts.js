$(document).ready(function() {
    
    /* Sticky navigation */
    var waypointFeatures = new Waypoint({
      element: $('.js-section-features'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } 
            else {
                $('nav').removeClass('sticky');
            }
        }, offset: '60px;'
    });
    
    /* Scroll buttons */
    var btnPlans = $('.js-scroll-to-plans');
    var btnShowMeMore = $('.js-scroll-to-start');
    
    var plans = $('.js-section-plans');
    var features = $('.js-section-features');
    
    btnPlans.click(function () {
        $('html, body').animate({ 
            scrollTop:  plans.offset().top 
        }, 1000)
    });
    
    btnShowMeMore.click(function () {
        $('html, body').animate({ 
            scrollTop:  features.offset().top 
        }, 1000)
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* SMOOTH SCROLLING ALTERNATIVE */
    // Select all links with hashes
    /*$('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });*/
    
    /* Animations on scroll */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    });
    
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    });
    
    /* Mobile nav */
    $('.js-nav-icon').click(function() {
       var nav = $('.js-main-nav'); 
        
        nav.slideToggle(200);
        
        
    });
});