//import MagnetMouse from 'magnet-mouse'

window.onscroll = function() {scrollFunction()};
const logoGif = document.getElementById("logo")
function scrollFunction() {
  if (document.documentElement.scrollTop >= 100) {
    logoGif.style.position = 'fixed';
    logoGif.style.width = "10%";
    logoGif.style.gridArea = "logoAfter";
    logoGif.style.margin ='2%';
    
  } else {
    logoGif.style.position = 'static';
    logoGif.style.width = "70%";
    logoGif.style.gridArea = "logoInit";
    logoGif.style.margin = 'auto';
    
  }
}
let mm = new MagnetMouse({
  magnet: {
    element: '.magnet'
  }
});

mm.init();