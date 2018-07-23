$('.govuk-button[value="Find address"]').bind('click', function() {
    let $data = $('.govuk-input').val();
    $('.govuk-custom-element-to-hide, .govuk-custom-element-to-display').toggle();
    $('.govuk-custom-data-to-display').text($data);
    return false;
});

$('.govuk-custom-revert-state').bind('click', function() {
    $('.govuk-custom-element-to-hide, .govuk-custom-element-to-display').toggle();
    return false;
});

$('input[id="private"]').bind('click', function() {
    if ($(this).attr('checked')) {
        $(this).attr('checked', false)
    } else {
        $(this).attr('checked', true);
    } 
});

$('#email-change-button').bind('click', function() {
    let $privateCheck = $('input[id="private"]').attr('checked');
    sessionStorage.setItem('privateCheck', $privateCheck);
});

$('#add-button').bind('click', function() {
    sessionStorage.setItem('addOrChange', 'add');
});

$('#govuk-custom-single-title-button').bind('click', function() {
    sessionStorage.setItem('propNumber', 'singleAddress')
});

$('#govuk-custom-single-title-button-2').bind('click', function() {
    sessionStorage.setItem('propNumber', 'multiAddress')
});

$('#govuk-custom-single-address-button').bind('click', function() {
    sessionStorage.setItem('propNumber', 'singleAddress')
});

$('#govuk-custom-multi-address-button').bind('click', function() {
    sessionStorage.setItem('propNumber', 'multiAddress')
});

$('.govuk-custom-update-single-property-button').bind('click', function() {
    sessionStorage.setItem('propNumber', 'single');
});

$('#govuk-custom-manual-address-entry-button').bind('click', function() {
    sessionStorage.setItem('manualAddress', 'yes');
});

$('.govuk-custom-update-first-property-button').bind('click', function() {
    sessionStorage.setItem('whichProperty', 'first');
});

$('.govuk-custom-update-second-property-button').bind('click', function() {
    sessionStorage.setItem('whichProperty', 'second');
})
