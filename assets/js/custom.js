$(window).on('load', function () {

    $('.loader').fadeOut('slow');

});

$(document).ready(function () {
    //Testimonials
    if ($("#testimonials").length > 0) {
        $('#testimonials').slick({

            swipe: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }


    //Order Alert
    if ($(".order").length > 0) {
        $('.order').click(function () {

            swal({
                title:"Congratulations",
                text: "Your Order has been placed Successfully",
                icon: "success",
            })

        });
    }
    //Home Slider
    if ($(".home_slider").length > 0) {
        $('.home_slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    //Fetch Gallery
    if ($('.category_item').length > 0) {
        
        $('.category_container ul li').click(function () {
            
            $('.category_container ul li').removeClass('active');
            $(this).addClass('active');
        });
        
        
        $('.category_item').click(function () {
            var category = $(this).attr('id');

            if (category == 'all') {
                $('.bakery_item').addClass('hide');
                setTimeout(function () {
                    $('.bakery_item').removeClass('hide');
                }, 300);

            } else {

                $('.bakery_item').addClass('hide');
                setTimeout(function () {
                    $('.' + category).removeClass('hide');
                }, 300);
            }


        });

    }

    //lightbox effetct
    if ($("#lightgallery").length > 0) {
        $("#lightgallery").lightGallery();
    }

    //Accordion
    if ($("#accordion").length > 0) {
        $("#accordion").accordion();
    }
    
    //cake_form_validation
    if ($("#orderform").length > 0) {
    $('#orderform').submit(
            function(){
                var full_name_value = $('#full_name').val();
                var last_name_value = $('#last_name').val();
                var email_value = $('#email').val();
                var tel_value = $('#usrtel').val();
                var item_value = $('#select_item').val();
                var choose_value = $('#selection').val();
                var is_ok       = true
                var message='';
                if(full_name_value == '')
                {
                    is_ok = false;
                    message+="Fullname required\n";
                }
                if(last_name_value == '')
                {
                    is_ok = false;
                    message+="Lastname required\n";
                }
                if(tel_value == '')
                {
                    is_ok = false;
                    message+="Invalid Cell No\n"; 
                }
                if(Number.isNaN(parseInt(tel_value))){
                    is_ok = false;
                    message+="It should be a number\n";
                }
                if(email_value == '')
                {
                    is_ok = false;
                    message+="mail not valid\n";
                }
                if(item_value == '')
                {
                    is_ok = false;
                    message+="Please select an item\n";
                }
                if(choose_value == ''){
                    is_ok = false;
                    message+=" Please select the pounds\n";
                }
                 
                if(is_ok){
                        swal( "Success" ,  "Thank you for your order Our representative will contact you soon" ,  "success" );
                    }
                else{
                    swal( "Oops" ,  message ,  "error" );
                }
                return false;
            }
        );}


    //Contact Form
        if ($("#contact_form").length > 0) {
            $('#contact_form').submit(
                function(){
                    var full_name_value = $('#full_name').val();
                    var email_value = $('#email').val();
                    var message_value = $('#message').val();
                    var is_ok       = true;
                    var message='';
                     
                    if(email_value == '')
                    {
                        is_ok = false;
                        message+="email not valid\n";
                    }
                    if(full_name_value == '')
                    {
                        is_ok = false;
                        message+="full name required\n";
                    }
                    if(message_value == ''){
                        is_ok = false;
                        message+="message required\n";
                    }
                    if(is_ok){
                         
                        swal( "Success" ,  "Thank you for your feedback" ,  "success" );
                    }
                    else{
                    swal( "Oops" ,  message ,  "error" );
                    // alert(message);
                     
                }
                return false;
            }
        );
       }

       //subscription Form

        if ($("#subscription_form").length > 0) {
                $('#subscription_form').submit(
                function(){
                var email_value = $('#e_mail').val();
                var is_ok       = true;
                var message='';
                 
                if(email_value ==''){
                    is_ok = false;
                    message+="Please enter the email address\n";
                     
                }
                if(is_ok){
                         
                    swal( "Success" ,  "Successfully Signed Up" ,  "success" );
                }
                else{
                    swal( "Oops" ,  message ,  "error" );
                }
                return false;
            }
        );
            }
         
         

});
