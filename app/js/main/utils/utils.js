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

var mq = function(value) {
    return 'only screen and (max-width:' + value.toString() + 'px)';
};

var utils = {
    breakpoint: {
        xxlarge: mq($breakpoint.xxlarge),
        xlarge: mq($breakpoint.xlarge),
        large: mq($breakpoint.large),
        medium: mq($breakpoint.medium)
    }
};

module.exports = utils;
