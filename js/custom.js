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

/*------------------------------------*\
    Isotope.js
\*------------------------------------*/

// init Isotope and resize images
var $grid = $('.grid')
$(window).load(function() {
    resizeBoxes();
    initIsotope();
});

function resizeBoxes()
{
    var h = 0;
    $('div.view').each(function() 
    {
        var b = $(this);
        if (h < b.height()) h = b.height();
    });     
    $('div.view').height(h);
} 
function initIsotope(){
$grid.isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});  
}

// store filter for each group
var filters = {};

$('.filters').on( 'click', '.btn', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}