$(document).ready(function () {

    $('input').focus(function() {
        $('.form-group').addClass("floating-label-form-group-with-value label");
        $('input').addClass("input-focus");
    })
    $('input').focusout(function() {
        $('.form-group').removeClass("floating-label-form-group-with-value label");
        $('input').removeClass("input-focus");
    })
})