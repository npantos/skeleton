/**
 * Name: Skeleton - Multipurpose Bootstrap HTML Template
 * Author: Nemanja Pantoš
 * Version: 0.4
 **/


/*------------------------------------*\
    WOW initialization
\*------------------------------------*/

new WOW().init();



/*------------------------------------*\
    Magic Popup
\*------------------------------------*/

$(document).ready(function() {
  $('.single-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    zoom: {
      enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });
  $('.gallery-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    zoom: {
      enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          },
          gallery: {
    // options for gallery
    enabled: true
  }

});

});

/*------------------------------------*\
    Bootstrap Tooltip
\*------------------------------------*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})