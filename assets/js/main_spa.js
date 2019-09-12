$(document).ready(function(){

// $('.myBtn').click(function(){
//   alert("llegue");
// });

// Crear evento eventlistener que verifique el cambio de tamaño de la ventana, cuando se produzca el cambio a 747px que realize este evento.$('#myBtn').addClass('myBtn');
$('#myBtn').addClass('myBtn');


// modal script
var modal =$('.modal'); 
// abrir modal
$('.myBtn').click(function(){
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

  // Slider

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

  // Slider contactenos
  $('.slider_center').slick({
    centerMode: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    // mobileFirst: true,
    autoplay: true,
    centerPadding: '20px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


// $('.scrolly').scrolly();


});
