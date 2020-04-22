
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#contact_form_submit',function(e){
            
            e.preventDefault();
            var name = $('#uname').val();
            var email = $('#email').val();
            var message = $('#message').val();

            if (!name) {
                 $('#uname').removeClass('error');
                 $('#uname').addClass('error').attr('placeholder','Name *');
             }else{
                 $('#uname').removeClass('error');
             }
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder','Email *')
             }else{
                 $('#email').removeClass('error');
             }
            if (!message) {
                 $('#message').removeClass('error');
                 $('#message').addClass('error').attr('placeholder','Message *')
             }else{
                 $('#message').removeClass('error');
             }
             
            
            if ( name && email && message ) {
             	$.ajax({
	                 type: "POST",
	                 url:'contact.php',
	                 data:{
                         'name': name,
                         'email': email,
                         'message': message,
	                 },
	                 success:function(data){
                         $('#contact_form_submit').children('.email-success').remove();
                         $('#contact_form_submit').prepend('<span class="alert alert-success email-success">'+data+'</span>');
                         $('#name').val('');
                         $('#email').val('');
                         $('#message').val('');
                         $('.email-success').fadeOut(3000);
	                 }
	             });
             }else{
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">somenthing is wrong</span>');
                $('.email-success').fadeOut(3000);
             }

            
            
        });
    })

}(jQuery));	
