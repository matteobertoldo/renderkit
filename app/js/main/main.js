/*!main.js
  @include: global functions
  @author: mbertoldo@alpenite.com
  @note: Hand-made and built with love in Venice, IT.
*/

(function($) {
    /**
     * @define global const
     * @param: {string}
     * @breakpoint: update var on sass config
     */

    var WIN = $(window),
    DOC = $(document),
    IS_TOUCH = Modernizr.touchevents,
    breakpoint = {
        xxlarge: 'only screen and (max-width: 1280px)',
        xlarge: 'only screen and (max-width: 1024px)',
        large: 'only screen and (max-width: 768px)',
        medium: 'only screen and (max-width: 667px)'
    };

    $(function() {
        /**
         * @enable hover on touch-device
         * @param: event
         */

        if (IS_TOUCH) {
            DOC.on('touchstart', true);
        }

        /**
         * @remove click delay on touch-device
         * @require: {FastClick}
         * @param: event
         */

        FastClick.attach(document.body);
    });
})(jQuery);
