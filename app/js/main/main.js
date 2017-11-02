var utils = require('./utils/utils');

$(function() {
    if (utils.touchevents) {
        $(document).on('touchstart', true);
    }

    FastClick.attach(document.body);
    svg4everybody();
});
