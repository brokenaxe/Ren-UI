
  function phone() {
    var myPhoneCount = 0;
  
    myPhoneCount = 1;
    $('.phone-holder').each(function (index) {
        $(this).attr("id","phone-" + myPhoneCount);
        myPhoneCount += 1;
    });
    myPhoneCount = 1;
    $('.phone-valid').each(function (index) {
        $(this).attr("id","valid-" + myPhoneCount);
        myPhoneCount += 1;
    });
    myPhoneCount = 1;
    $('.phone-error').each(function (index) {
        $(this).attr("id","error-" + myPhoneCount);
        myPhoneCount += 1;
    });
    $('.flag-phone').each(function (index) {
        var input = $(this).find('.phone-holder').get(0),
        errorMsg = $(this).find('.phone-error').get(0),
        validMsg = $(this).find('.phone-valid').get(0);
        var country = 'US';
        var dailcode = false;

        if ($(this).find('input[name="renui-phone-country"]').val() !== undefined) {
          country = $(this).find('input[name="renui-phone-country"]').val();
        }
        if ($(this).find('input[name="renui-phone-dailcode"]').val() !== undefined) {
          dailcode = true;
        }
        // Error messages based on the code returned from getValidationError
        var errorMap = [ "Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  
        // Initialise plugin
        var intl = window.intlTelInput(input, {
            separateDialCode: dailcode,
            preferredCountries: [country]
        });

        var reset = function() {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
        };
    
        // Validate on blur event
        input.addEventListener('blur', function() {
          reset();
          if(input.value.trim()){
              if(intl.isValidNumber()){
                validMsg.classList.remove("hide");
              }else{
                input.classList.add("error");
                var errorCode = intl.getValidationError();
                errorMsg.innerHTML = errorMap[errorCode];
                errorMsg.classList.remove("hide");
              }
          }
        });
        // Reset on keyup/change event
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);
    });      
  }