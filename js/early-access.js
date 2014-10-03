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

        var dataString = $('form').serialize();

        $('form input').attr('disabled', 'disabled');
        $('form .input').addClass('disabled');

            url = '';
            url = $('form').attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            succes: function() {
                $('.flash').html('').addClass('success').append(
                    $('<p></p>').html('Thanks for your early access request.'),
                    $('<p></p>').append(
                        $('<span></span>').html(' Lets Clickin!')
                    )
                ).fadeIn(100);
                setTimeout(
                    function() {
                        $('.flash').fadeOut();
                }, 1500);
            },
            error: function(request) {

                var response = JSON.parse(request.responseText);
                var message = response.error.message;

                $('.flash').html('').addClass('error').append(
                    $('<p></p>').html('Oops something went wrong:' + '&nbsp;' + message + '.'),
                    $('<p></p>').html('Please try again or contact us for early access.'),
                    $('<input></input>').addClass('submit').attr('type', 'button').attr('value', 'Try again').bind('click', function(){
                        $('form input').removeAttr('disabled', 'disabled');
                        $('form .input').removeClass('disabled');
                    })
                ).fadeIn(100);

                $('.flash').bind('click', function(){
                    $(this).fadeOut();
                });
            }

        });

        return false;
    });
