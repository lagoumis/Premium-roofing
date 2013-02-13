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

jQuery(document).ready(function($) { /*beige color tab*/
    $("#off-white").click(function() {;
      $(".image").css("display", "none");
      $("#roof-off-white").css("display", "block");
      $("#color-title").text("Off white");
    }); 
    
    $("#smooth-cream").click(function() {
      $(".image").css("display", "none");
      $("#roof-smooth-cream").css("display", "block");
      $("#color-title").text("Smooth cream");
    });
    
     $("#gull-grey").click(function() {
      $(".image").css("display", "none");
      $("#roof-gull-grey").css("display", "block");
      $("#color-title").text("Gull grey");
    });
    
    $("#birch-grey").click(function() {
      $(".image").css("display", "none");
      $("#roof-birch-grey").css("display", "block");
      $("#color-title").text("Birch grey");
    });
    
    $("#beige").click(function() {
      $(".image").css("display", "none");
      $("#roof-beige").css("display", "block");
      $("#color-title").text("Beige");
    });
    
    $("#brushwood").click(function() {
      $(".image").css("display", "none");
      $("#roof-brushwood").css("display", "block");
      $("#color-title").text("Brushwood");
    });
    
    $("#mocha").click(function() {
      $(".image").css("display", "none");
      $("#roof-mocha").css("display", "block");
      $("#color-title").text("Mocha");
    });
});

jQuery(document).ready(function($) { /*orange color tab*/
    $("#pale-terracotta").click(function() {;
      $(".image").css("display", "none");
      $("#roof-pale-terracotta").css("display", "block");
      $("#color-title").text("Pale Terracotta");
    }); 
    
    $("#arizona").click(function() {
      $(".image").css("display", "none");
      $("#roof-arizona").css("display", "block");
      $("#color-title").text("Arizona");
    });
    
     $("#amber").click(function() {
      $(".image").css("display", "none");
      $("#roof-amber").css("display", "block");
      $("#color-title").text("amber");
    });
    
    $("#peach").click(function() {
      $(".image").css("display", "none");
      $("#roof-peach").css("display", "block");
      $("#color-title").text("peach");
    });
    
    $("#riverclay").click(function() {
      $(".image").css("display", "none");
      $("#roof-riverclay").css("display", "block");
      $("#color-title").text("riverclay");
    });
    
    $("#terracotta").click(function() {
      $(".image").css("display", "none");
      $("#roof-terracotta").css("display", "block");
      $("#color-title").text("terracotta");
    });
    
    $("#desert-clay").click(function() {
      $(".image").css("display", "none");
      $("#roof-desert-clay").css("display", "block");
      $("#color-title").text("desert clay");
    });
});

jQuery(document).ready(function($) { /*red color tab*/
    $("#homestead").click(function() {;
      $(".image").css("display", "none");
      $("#roof-homestead").css("display", "block");
      $("#color-title").text("homestead");
    }); 
    
    $("#tuscan-red").click(function() {
      $(".image").css("display", "none");
      $("#roof-tuscan-red").css("display", "block");
      $("#color-title").text("tuscan red");
    });
    
     $("#autumn").click(function() {
      $(".image").css("display", "none");
      $("#roof-autumn").css("display", "block");
      $("#color-title").text("autumn");
    });
    
    $("#rich-red").click(function() {
      $(".image").css("display", "none");
      $("#roof-rich-red").css("display", "block");
      $("#color-title").text("rich red");
    });
    
    $("#burgundy").click(function() {
      $(".image").css("display", "none");
      $("#roof-burgundy").css("display", "block");
      $("#color-title").text("burgundy");
    });
    
    $("#rust").click(function() {
      $(".image").css("display", "none");
      $("#roof-rust").css("display", "block");
      $("#color-title").text("rust");
    });
    
    $("#deep-burgundy").click(function() {
      $(".image").css("display", "none");
      $("#roof-deep-burgundy").css("display", "block");
      $("#color-title").text("deep burgundy");
    });
});

jQuery(document).ready(function($) { /*green color tab*/
    $("#light-rivergum").click(function() {;
      $(".image").css("display", "none");
      $("#roof-light-rivergum").css("display", "block");
      $("#color-title").text("light rivergum");
    }); 
    
    $("#mist-green").click(function() {;
      $(".image").css("display", "none");
      $("#roof-mist-green").css("display", "block");
      $("#color-title").text("mist green");
    }); 
    
    $("#cobble").click(function() {;
      $(".image").css("display", "none");
      $("#roof-cobble").css("display", "block");
      $("#color-title").text("cobble");
    }); 
    
    $("#rivergum").click(function() {;
      $(".image").css("display", "none");
      $("#roof-rivergum").css("display", "block");
      $("#color-title").text("rivergum");
    }); 
    
    $("#gum-tree").click(function() {;
      $(".image").css("display", "none");
      $("#roof-gum-tree").css("display", "block");
      $("#color-title").text("gum tree");
    });
    
    $("#brunswick-green").click(function() {;
      $(".image").css("display", "none");
      $("#roof-brunswick-green").css("display", "block");
      $("#color-title").text("brunswick green");
    });
       
});

jQuery(document).ready(function($) { /*blue color tab*/
    $("#mountain-blue").click(function() {;
      $(".image").css("display", "none");
      $("#roof-mountain-blue").css("display", "block");
      $("#color-title").text("mountain blue");
    }); 
    
    $("#bluestone").click(function() {;
      $(".image").css("display", "none");
      $("#roof-bluestone").css("display", "block");
      $("#color-title").text("bluestone");
    }); 
});

jQuery(document).ready(function($) { /*grey color tab*/
    $("#ghost-gum").click(function() {;
      $(".image").css("display", "none");
      $("#roof-ghost-gum").css("display", "block");
      $("#color-title").text("ghost gum");
    }); 
    
    $("#bendigo-grey").click(function() {;
      $(".image").css("display", "none");
      $("#roof-bendigo-grey").css("display", "block");
      $("#color-title").text("bendigo grey");
    });
    
    $("#slate-grey").click(function() {;
      $(".image").css("display", "none");
      $("#roof-slate-grey").css("display", "block");
      $("#color-title").text("slate grey");
    });
    
    $("#charcoal").click(function() {;
      $(".image").css("display", "none");
      $("#roof-charcoal").css("display", "block");
      $("#color-title").text("charcoal");
    });
    
    $("#dark-charcoal").click(function() {;
      $(".image").css("display", "none");
      $("#roof-dark-charcoal").css("display", "block");
      $("#color-title").text("dark charcoal");
    });
    
    $("#black").click(function() {;
      $(".image").css("display", "none");
      $("#roof-black").css("display", "block");
      $("#color-title").text("black");
    });
});

jQuery(document).ready(function($) { /*grey color tab*/
    $("#smokebush").click(function() {;
      $(".image").css("display", "none");
      $("#roof-smokebush").css("display", "block");
      $("#color-title").text("smokebush");
    }); 
    
    $("#valley-brown").click(function() {;
      $(".image").css("display", "none");
      $("#roof-valley-brown").css("display", "block");
      $("#color-title").text("valley brown");
    }); 
    
    $("#homebush").click(function() {;
      $(".image").css("display", "none");
      $("#roof-homebush").css("display", "block");
      $("#color-title").text("homebush");
    }); 
    
    $("#tan").click(function() {;
      $(".image").css("display", "none");
      $("#roof-tan").css("display", "block");
      $("#color-title").text("tan");
    }); 
    
    $("#chocolate").click(function() {;
      $(".image").css("display", "none");
      $("#roof-chocolate").css("display", "block");
      $("#color-title").text("chocolate");
    }); 
    
     $("#dark-brown").click(function() {;
      $(".image").css("display", "none");
      $("#roof-dark-brown").css("display", "block");
      $("#color-title").text("dark brown");
    }); 
    
    $("#manganese").click(function() {;
      $(".image").css("display", "none");
      $("#roof-manganese").css("display", "block");
      $("#color-title").text("manganese");
    }); 
});


