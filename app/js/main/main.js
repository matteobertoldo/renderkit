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
    BREAKPOINT = {
        desktop: 'only screen and (max-width: 1280px)',
        tlandcape: 'only screen and (max-width: 1024px)',
        tportrait: 'only screen and (max-width: 768px)',
        smartphone: 'only screen and (max-width: 667px)'
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
