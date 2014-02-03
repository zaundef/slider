(function($) {
  $.fn.slider = function(options) {

    var self = this;

    var activeSlide;
    var slidesContainer;
    var slides;
    var slideWidth;
    var slidesLength;
    var isAnimated = false;

    var animateSlide = function(direction) {

      if (!isAnimated) {

        isAnimated = true;

        var scPos = slidesContainer.position();
        var scLeft = scPos.left;

        activeSlide.removeClass('active');

        switch (direction) {
          case 'next':
            scLeft -= slideWidth;
            activeSlide = activeSlide.next('.slide');
            break;
          case 'prev':
            scLeft += slideWidth;
            activeSlide = activeSlide.prev('.slide');
            break;
        }

        slidesContainer.css('left', scLeft);
        setTimeout(function() {
          activeSlide.addClass('active');
          isAnimated = false;
        }, 500);
      }
    };

    var moveFirst = function() {
      activeSlide.removeClass('active');
      slidesContainer.css('left', 0);
      activeSlide = slides.first();
      activeSlide.addClass('active');
    };

    var moveNext = function() {
      var scLeft = slidesContainer.position().left;

      if (scLeft > (-1 * (slidesLength - 1) * slideWidth)) {
        animateSlide('next');
      }
    };

    var movePrev = function() {
      var scLeft = slidesContainer.position().left;

      if(scLeft < 0) {
        animateSlide('prev');
      }
    };

    self.initialize = function() {

      slidesContainer = self.find('.slides');
      slides = self.find('.slide');

      slidesLength = slides.length;

      activeSlide = slides.first();
      activeSlide.addClass('active');
      slidesContainer.width(self.width() * slidesLength);
      slidesContainer.height(self.height());

      slides.width(self.width());
      slides.height(self.height());

      slideWidth = activeSlide.width();

      return self;
    };

    self.moveFirst = function() {
      moveFirst();
    }

    self.moveNext = function() {
      moveNext();
    };

    self.movePrev = function() {
      movePrev();
    }

    return self.initialize();

  };
})(jQuery);