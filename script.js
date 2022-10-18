/*window.onscroll = function() {scrollFunction()};
const logoGif = document.getElementById("logo")
function scrollFunction() {
  if (document.documentElement.scrollTop >= 100) {
    logoGif.style.width = "10%";
    
  } else {
    logoGif.style.width = "70%";
    
  }
}*/

let mm = new MagnetMouse({
  magnet: {
    element: '.magnet'
  }
});

mm.init();