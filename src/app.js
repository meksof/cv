

require("./assets/css/styles.scss");
var jQuery = $ = require("jquery");
var bs = require("./assets/js/bootstrap-modal.js")(jQuery);
require("./assets/js/iCheck/icheck.js")(jQuery);

/**
 * Show bottom Action buttons fixed on the footer
 */
$(window).scroll(function () {
    var $mobileActionBtn = $('.mobile-action-buttons');
    var screenWidth = $("body").width();
    if (screenWidth < 768) { // only for mobile
        if ($(document).scrollTop() > 100) {
            $mobileActionBtn.css({
                display: "block"
            })
        } else {
            $mobileActionBtn.css({
                display: "none "
            })
        }
    }
});

/**
 * iCheck init
 */
$('input[type="radio"]').iCheck({
    checkboxClass: 'icheckbox',
    radioClass: 'iradio',
    increaseArea: '20%'
});

/**
 * Form swither
 */
var $formInterested = $('#form-interested'),
    $formInterestedBut = $('#form-interested-but'),
    $formNotInterested = $('#form-not-interested');
$('#radio-group-one').on('ifChecked', function () {
    $formInterested.show();
    $formInterestedBut.hide();
    $formNotInterested.hide();
});

$('#radio-group-two').on('ifChecked', function () {
    $formInterested.hide();
    $formInterestedBut.show();
    $formNotInterested.hide();
});

$('#radio-group-three').on('ifChecked', function () {
    $formInterested.hide();
    $formInterestedBut.hide();
    $formNotInterested.show();
});

/** Modal dismiss event */
var $radioThree = $('#radio-group-three'),
    $radioTwo = $('#radio-group-two'),
    $radioOne = $('#radio-group-one');
$('#feedback-modal').on('hidden.bs.modal', resetModalForm);

function resetModalForm() {
    $bigText.html("");
    $formInterested.hide();
    $formInterestedBut.hide();
    $formNotInterested.hide();
    $radioThree.iCheck('uncheck');
    $radioTwo.iCheck('uncheck');
    $radioOne.iCheck('uncheck');
}



/**
 * Not interested button
 */
var $bigText = $('#big-text');
$('.not-interested').on('click', function () {
    $radioThree.iCheck('check');
    $bigText.text("Même un simple feedback est très important pour moi !");
});