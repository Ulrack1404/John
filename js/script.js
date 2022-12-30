$(document).ready(function () {
   $('.icon-menu').click(function (event) {
      $('.menu__body, .icon-menu').toggleClass('_active');  
      $('body').toggleClass('lock');      
   }); 
});  

