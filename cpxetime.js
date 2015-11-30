// ==UserScript==
// @name        test piotre
// @namespace   ows.fr
// @include     http://www.redmine.org/projects/*/issues/*
// @include     http://www.redmine.org/issues/*
// @version     1
// @grant       none
// ==/UserScript==
Cpxetime = {
  focus: function () {
  // Autofocus sur le login.
  jQuery('#issue_estimated_hours').focus();
  },
  filltime: function (cpxe) {
  // Autofocus sur le login.
  var cpxetotime = { '1' : '0,25', '2' : '0,5', '3' : '1', '5' : '2', '8' : '3', '13' : '4', '20' : '7', '40' : '14', '100' : '28' };
    
    jQuery('#issue_estimated_hours').val(cpxetotime[cpxe]);
  },
}
  
jQuery(function () {
   jQuery('#issue_custom_field_values_20').change(function () {
     Cpxetime.focus();
     Cpxetime.filltime(jQuery(this).val());
   })
});
