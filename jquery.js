$(document).ready(function () {
    var placeholder = $('input').attr("placeholder");
    $('input').focus(function() {
        $('.form-group').addClass("floating-label-form-group-with-value label");
        $('input').attr("placeholder", "");
    })
    $('input').focusout(function() {
        $('.form-group').removeClass("floating-label-form-group-with-value label");
        $('input').attr("placeholder", placeholder);
    })
})