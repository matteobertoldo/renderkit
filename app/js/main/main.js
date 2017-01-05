/**!main.js
  @param: {global.functions}
  @author: mbertoldo@alpenite.com
  @description: Hand-made and built with love in Venice, IT.
*/

(function($) {
    /**
     * @define global const
     * @param: {string}
     * @breakpoint: update var on sass config
     */

    var WIN = $(window),
    DOC = $(document);

    var util = {
        documentTouch: Modernizr.touchevents,
        objectFit: Modernizr.objectFit
    };

    var breakpoint = {
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

        if (util.documentTouch) {
            DOC.on('touchstart', true);
        }

        /**
         * @remove click delay on touch-device
         * @require: {FastClick}
         * @param: event
         */

        FastClick.attach(document.body);

        /**
         * @support for use external SVG spritemaps.
         * @require: {svg4everybody}
         * @param: {function}
         */

         svg4everybody();
    });
})(jQuery);
