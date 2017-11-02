var base = require('./utils/utils.js');

$(function() {
    if (base.util.touchevents) {
        $(document).on('touchstart', true);
    }

    FastClick.attach(document.body);
    svg4everybody();
});
