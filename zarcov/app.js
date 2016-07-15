//*-----------------------------------------------
// DOCUMENT READY
//-----------------------------------------------*/

$(document).ready(function(){

      $('.js-like').on('click',function(event){

      event.preventDefault(); #Prevents the Link behaviour to go to some other page
      $(this).text('Liked!').addClass('is-liked');

});
});
