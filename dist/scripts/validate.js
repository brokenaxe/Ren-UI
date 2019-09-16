function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function matchText(one,two) {
    var answer = false;

    if (one === '') {
        answer = false;
    } else if (two === '') {
        answer = false;   
    } else if (one !== two) { 
        answer = false; 
    } else { 
        answer = true;
    } 
    return answer;
}
function emailStrength(pass) {
    var arr = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*.,?^])[\w!@#$%^&*.,?^]{8,}$/;
    return arr.test(pass);
}
function validateSignIn() {
    $(document).ready(function() {
        $('#notice').bind('DOMSubtreeModified',function(event) {
            if ($('#notice').html() !== '') {
                $('#inputEmail').addClass('is-invalid');
                checkSubmit();
            } else {
                $('#inputEmail').removeClass('is-invalid');
            }
        });
        $('.g-recaptcha').bind('DOMSubtreeModified',function(event) {
            checkSubmit();
        });
        $('#btnSubmit, #inputAgree').click(function() {
            checkSubmit();
        });
        $('#inputPassword').on('change keyup', function() {
            if (emailStrength($(this).val()) === false) {
                $(this).addClass('is-invalid');
                $('#error').html('<div class="alert alert-secondary" role="alert">Password must have Upper, Number, special and 10 char long.</div>');
                checkSubmit();
            } else {
                $(this).removeClass('is-invalid');
                $('#error').html('');
            }
        });
        $('#inputPassword2').on('change keyup', function() {
            if ($(this).val() !== $("#inputPassword").val()) {
                $(this).addClass('is-invalid');
                $('#error2').html('<div class="alert alert-secondary" role="alert">Password don\'t match</div>');
                checkSubmit();
            } else {
                $(this).removeClass('is-invalid');
                $('#error2').html('');
            }
        });
    });
}
function checkSubmit() {
    var $captcha = $('.g-recaptcha'),
      response = grecaptcha.getResponse();
  
    if (response.length === 0) {
        $(':input[type="submit"]').prop('disabled', true);
        if( !$captcha.hasClass( "error" ) ){
            $captcha.addClass( "error" );
        }
    } else {
        $(':input[type="submit"]').prop('disabled', false);
        $captcha.removeClass( "error" );
    }
    var checkValid = 1;
    $(':input[type="submit"]').prop('disabled', false);
    $('.is-invalid').each(function(i, obj) {
        checkValid = 0;
    });
    if($('#inputAgree').prop('checked')) {
        $(':input[type="submit"]').prop('disabled', false);
    } else {
        $(':input[type="submit"]').prop('disabled', true);
        checkValid = 0;
    }
    if (checkValid === 0) {
        $(':input[type="submit"]').prop('disabled', true);
    } else {
        $(':input[type="submit"]').prop('disabled', false);
    }
}