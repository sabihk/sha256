$(document).ready(function() {

	// On login button click hash password if it's having some value
    $('#btn_login').click(function() {
        if($('input[name="password"]').val().length) {
            // Hash password using sha256 before sending it over HTTP
            $('input[name="password').val(sha256($('input[name="password').val()));
        }
    });

    // On register button click hash password if it's having length >= 6
    $('#btn_register').click(function() {
    	// Provide minimum password length here
        var password_length = 6;

        if($('input[name="password"]').val().length >= password_length &&
        	$('input[name="password_confirmation"]').val().length >= password_length) {
            // Hash password using sha256 before sending it over HTTP
            $('input[name="password').val(sha256($('input[name="password').val()));
            $('input[name="password_confirmation').val(sha256($('input[name="password_confirmation').val()));
        }
    });

});