$(document).ready(function(){

// $('#myBtn').click(function(){
//   alert("llegue");
// });

// modal script
var modal =$('.modal'); 
// abrir modal
$('#myBtn').click(function(){
  $('.modal').removeClass('disp_none');
  $('.modal').addClass('disp_flex');
});

// cerrar modal
$('.close').click(function(){
  $('.modal').removeClass('disp_flex');
  $('.modal').addClass('disp_none');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


// Slick

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });




// $('.scrolly').scrolly();


});
