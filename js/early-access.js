    $('#submit').bind('click', function() {

        $('label').hide();
        $('form').find('.focus').removeClass('focus');
      
        // validatin and process form here
        var name = $('input#name').val();
            if (name == "") {
                $("input#name").focus().prev('label').html('Please submit a name.').fadeIn(250);

                return false;
            }
        var email = $('input#email').val();
            if (email == "") {
                $("input#email").focus().prev('label').html('Please submit an email address.').fadeIn(250);
                return false;
            }
        var city = $('input#city').val();
            if (city == "") {
                $("input#city").focus().prev('label').html('Please submit a city.').fadeIn(250);
                return false;
            }
        var country = $('input#country').val();
            if (country == "") {
                 $("input#country").focus().prev('label').html('Please submit a country.').fadeIn(250);
                return false;
            }
        var platform = $('#platform option:selected').val();
            if (platform == "") {
                $("#platform").closest('.fancy-select').addClass('focus').prev('label').html('Please submit a platform.').fadeIn(250);
                return false;
            }
        var terms = $('#terms:checked').val();

            if (terms == null) {
                $("#terms").focus().prev('label').html('Please accept our terms.').fadeIn(250);
                return false;
            }

        var dataString = JSON.stringify($('form').serialize());

            url = '';
            url = $('form').attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            success: function() {
                
            },
            error: function(){
                $('.flash').html('').addClass('error').html('Oops something went wrong. Please contact us for early access.').fadeIn(100);
                $('.flash').bind('click', function(){
                    $(this).fadeOut();
                });
            }

        });

        return false;
    });