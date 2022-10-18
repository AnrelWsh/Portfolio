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


/*const zoomElement = document.querySelector('.zoom')
const afterZoomElement = document.querySelector('.afterzoom')
const imgElement = document.querySelector('#imgh')
const WIDTH = document.body.clientWidth
const HEIGHT = zoomElement.clientHeight
const IMAGE_WIDTH = imgElement.clientWidth
const IMAGE_HEIGHT = imgElement.clientHeight
const ZOOM_SPEED = 500 // Lower is faster
const ZOOM_BREAKPOINT = WIDTH / IMAGE_WIDTH // When it should stop zooming in
const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT
const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED // Absolute position, when the Element reached maximum size

// Fade --------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------- Fade

function anim() {
    let scroll = window.scrollY
    let temp = scroll / ZOOM_SPEED
    let zoom = temp > 1 ? temp : 1

    // Only update the Elements scale, when we are below the breakpoint
    if (zoom < ZOOM_BREAKPOINT) {
        // Only scale the Image, so the Zoom element does not mess with the document width
        imgElement.style.transform = `scale(${zoom})`
        // Sets the Elements position to fixed, so it can resize without scrolling away
        zoomElement.style.top = '0px'
        zoomElement.style.position = 'fixed'
    } else {
        // Makes sure the Element always reaches Max Size
        imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`
        // Sets the elements position to absolute, so it will scroll with the rest of the document
        zoomElement.style.position = 'absolute'
        zoomElement.style.top = ABSOLUTE + 'px'
    }


    prev = scroll
    // -------------------------------------------------------------------------------------- Fade
}

// Resets scroll position on every reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

document.addEventListener('scroll', () => window.requestAnimationFrame(anim))

// Fade --------------------------------------------------------------------------------------
zoomElement.style.opacity = 1
// -------------------------------------------------------------------------------------- Fade

// Positions the afterZoom element right below the zoomed image
afterZoomElement.style.top = ABSOLUTE + IMAGE_HEIGHT_MAX / 2 + HEIGHT / 2 + 'px'*/



/*function LargeTitle() {
  const largeTitle = document.querySelector('.largeTitle')

  if (largeTitle[0]) {
    largeTitle.forEach((section) => {
      const title = document.querySelector('.line-0', section)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      tl.to(title, { scale: 0.35 })
    })
  }
}

function LargeTitleIn() {
  const largeTitle = document.querySelector('.largeTitle-txt')

  if (largeTitle) {
    const chars = document.querySelectorAll('.char-1', largeTitle)

    gsap.set(largeTitle, { autoAlpha: 1 })
    gsap.from(chars, {
      duration: 0.8,
      y: '-200%',
      stagger: 0.05,
      delay: 0.3,
    })
  }
}*/