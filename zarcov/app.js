//*-----------------------------------------------
// DOCUMENT READY
//-----------------------------------------------*/

$(document).ready(function(){

      $('.js-like').on('click',function(event){

        event.preventDefault(); //Prevents the Link behaviour to go to some other page
        $(this).text('Bazingaaa').closest('.news-item').addClass('is-liked');

      });

      $('.js-add-link').on('click',function(event){

        event.preventDefault(); //Prevents the Link behaviour to go to some other page
        $('.js-form').toggleClass('is-visible');

      });
});
