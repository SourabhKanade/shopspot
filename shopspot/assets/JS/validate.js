(function ($) {
    "use strict";
    

    $('#processing_req').hide();
    $('#save_email').on('click', function () {
        var sb_email = $('#sb_email').val();
        var sb_action = $('#sb_action').val();
        if (carspot_validateEmail(sb_email)) {
            $('#save_email').hide();
            $('#processing_req').show();
            $.post('#',
                { action: 'sb_mailchimp_subcribe', sb_email: sb_email, sb_action: sb_action }).done(function (response) {
                    $('#processing_req').hide();
                    $('#save_email').show();
                    if (response == 1) {
                        toastr.success('Thank you, we will get back to you.', 'Success!', { timeOut: 2500, "closeButton": true, "positionClass": "toast-bottom-right" });
                        $('#sb_email').val('');
                    }
                    else {
                        toastr.error('There is some error, please check your API-KEY and LIST-ID.', 'Error!', { timeOut: 2500, "closeButton": true, "positionClass": "toast-bottom-right" });
                    }
                });
        }
        else {
            toastr.error('Please add valid email.', 'Error!', { timeOut: 2500, "closeButton": true, "positionClass": "toast-bottom-right" });
        }
    });


})(jQuery);
function checkVals() {
    return false;
}