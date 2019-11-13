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

// $('.fade').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     centerMode: true,
//     mobileFirst: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     fade: true,
//     cssEase: 'linear'
//   });

//   // Slider contactenos
//   $('.slider_center').slick({
//     centerMode: true,
//     infinite: true,
//     speed: 500,
//     centerMode: true,
//     // mobileFirst: true,
//     autoplay: true,
//     centerPadding: '20px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });


// $('.scrolly').scrolly();

// Galeria productos interactiva
// ---------------------Galería interactivda-------------------------

// activo cat
$('.categorias .list-group .item_cat[cat="all"]').addClass('active_cat')

// Selector con el click
$('.item_cat').click(function(){
var catProd = $(this).attr('cat');
// alert(catProd)

$('.item_cat').removeClass('active_cat');
$(this).addClass('active_cat');

// Ocultando productos

$('.product_item').css('transform', 'scale(0)');
function ocultarProd(){
  $('.product_item').hide();
}setTimeout(ocultarProd,400);


// mostrando productos categorizados
function mostrarProd(){
  $('.product_item[cat="'+catProd+'"]').show();
  $('.product_item[cat="'+catProd+'"]').css('transform', 'scale(1)');
}setTimeout(mostrarProd,400);


});

// mostrar todo
$('.item_cat[cat="all"]').click(function(){

  function mostrarTodo(){
    $('.product_item').show();
    $('.product_item').css('transform', 'scale(1)');
  }setTimeout(mostrarTodo,400);
  
});

});
