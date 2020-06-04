 // side nav
function openNav() {
  document.getElementById("mySidepanel").style.width = "90%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// side nav end







// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//owl carusel end








// hader find button on scroll show

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// hader find button on scroll show