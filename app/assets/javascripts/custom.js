$('.govuk-button[value="Find address"]').bind('click', function() {
    var data = $('.govuk-input').val();
    $('.govuk-custom-element-to-hide').toggle();
    $('.govuk-custom-element-to-display').toggle();
    $('.govuk-custom-data-to-display').text(data);
    return false;
});

$('.govuk-custom-revert-state').bind('click', function() {
    $('.govuk-custom-element-to-hide').toggle();
    $('.govuk-custom-element-to-display').toggle();
    return false;
})