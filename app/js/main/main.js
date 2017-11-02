var util = require('./utils/utils');

$(function() {
    if (util.touchevents) {
        $(document).on('touchstart', true);
    }

    FastClick.attach(document.body);
    svg4everybody();
});
