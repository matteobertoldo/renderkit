/**
 * @var utils: global utilities & breakpoints
 * @return: {bool|string|Array}
 * @description: Remember to agree the same values ​​for `$breakpoint` also in the file `scss/config/_breakpoints.scss`
 */

var $breakpoint = {
    xxlarge: 1440,
    xlarge: 1200,
    large: 1024,
    medium: 640
};

var mediaValue = function(value) {
    return Modernizr.mq('only screen and (max-width:' + value.toString() + 'px)');
};

var utils = {
    touchevents: Modernizr.touchevents,
    objectfit: Modernizr.objectfit,
    breakpoint: {
        xxlarge: mediaValue($breakpoint.xxlarge),
        xlarge: mediaValue($breakpoint.xlarge),
        large: mediaValue($breakpoint.large),
        medium: mediaValue($breakpoint.medium)
    }
};

module.exports = utils;
