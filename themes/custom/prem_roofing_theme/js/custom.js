jQuery(document).ready(function($) {

  var defaultText = "First Name: *";
  if ($('#edit-submitted-first-name').val() == '') {
      $('#edit-submitted-first-name').val(defaultText);
  }
  $('#edit-submitted-first-name').focus(function() { 
    if ($(this).val() == defaultText) {
      $(this).val('');
    }
  });
  $('#edit-submitted-first-name').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText);
    } 
  });
  
  var defaultText2 = "Last Name: *";
  if ($('#edit-submitted-last-name').val() == '') {
      $('#edit-submitted-last-name').val(defaultText2);
  }
  $('#edit-submitted-last-name').focus(function() { 
    if ($(this).val() == defaultText2) {
      $(this).val('');
    }
  });
  $('#edit-submitted-last-name').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText2);
    } 
  });
  
  var defaultText3 = "Contact number: *";
  if ($('#edit-submitted-contact-number').val() == '') {
      $('#edit-submitted-contact-number').val(defaultText3);
  }
  $('#edit-submitted-contact-number').focus(function() { 
    if ($(this).val() == defaultText3) {
      $(this).val('');
    }
  });
  $('#edit-submitted-contact-number').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText3);
    } 
  });
  
  var defaultText4 = "Email: *";
  if ($('#edit-submitted-email').val() == '') {
      $('#edit-submitted-email').val(defaultText4);
  }
  $('#edit-submitted-email').focus(function() { 
    if ($(this).val() == defaultText4) {
      $(this).val('');
    }
  });
  $('#edit-submitted-email').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText4);
    } 
  });
  
    var defaultText5 = "Message:";
  if ($('#edit-submitted-message').val() == '') {
      $('#edit-submitted-message').val(defaultText5);
  }
  $('#edit-submitted-message').focus(function() { 
    if ($(this).val() == defaultText5) {
      $(this).val('');
    }
  });
  $('#edit-submitted-message').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText5);
    } 
  });
}); 



