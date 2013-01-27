jQuery(document).ready(function($) {
	var arr = $(".field-name-field-basic-page-image img").map(function() { return this.alt; }).get();
	$(".field-name-field-basic-page-image .field-item img").each(function (i){
		$(".field-name-field-basic-page-image .field-item img:eq("+i+")").parent().append("<div>" + arr[i] + "</div>");
 	});

	$('.field-name-download-as-pdf-link a,.field-name-field-media-link a').click(function() {
    $(this).attr('target', '_blank');
	});
	if(!$('.field-name-download-as-pdf-link a').attr("href")){
		$('.field-name-download-as-pdf-link a').hide();
	};
  var defaultText = "Search site";
  if ($('#edit-search-block-form--2').val() == '') {
      $('#edit-search-block-form--2').val(defaultText);
  }
  $('#edit-search-block-form--2').focus(function() { 
    if ($(this).val() == defaultText) {
      $(this).val('');
    }
  });
  $('#edit-search-block-form--2').blur(function() {
    if ($(this).val() == '') {
      $(this).val(defaultText);
    } 
  });
}); 



