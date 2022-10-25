/*BURGER MENU DISPLAY*/ 

const btnBurger = document.getElementById('menu-btn')
const menuBurger = document.getElementById('menu')
const nOverflow = document.getElementById('html')

btnBurger.addEventListener('click', () => {
  if (menuBurger.style.display == "none") {
    menuBurger.style.display = "block"
    btnBurger.classList.remove("menu-btn-close")
    btnBurger.classList.add("menu-btn-open")
    nOverflow.style.overflowY = "hidden"
  } else{
    menuBurger.style.display = "none"
    btnBurger.classList.remove("menu-btn-open")
    btnBurger.classList.add("menu-btn-close")
    nOverflow.style.overflowY = "visible"
  }
})

/**INTRO HEADER ANIM */

gsap.registerPlugin(ScrollTrigger);
const bigTitle = document.querySelectorAll('#ttlIntro')
const bigLogo = document.querySelectorAll('#logoIntro')

bigTitle.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: 30,
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: 150,
  })
})
bigLogo.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: 30,
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: -150,
  })
})


/**GSAP API ANIMATION OF SLIDE TITLE */

gsap.registerPlugin(ScrollTrigger);
const slideTitleUp = document.querySelectorAll('.slide-title')
const slideTitleDown = document.querySelectorAll('.slide-title-reverse')

slideTitleUp.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: -200,
  })
})
slideTitleDown.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: 300,
  })
})

  /*const largeTitle = document.querySelectorAll('.largeTitle')

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
  }*/

/**CHANGE IMAGE ON HOVER */

let imgMe = document.getElementById("imgMe")
const me1 = document.getElementById("me1")
const me2 = document.getElementById("me2")
const me3 = document.getElementById("me3")


me1.addEventListener('mouseover', () => {
    imgMe.src = "img/logoIIM.png" 
})
me2.addEventListener('mouseover', () => {
    imgMe.src = "img/workstudy.jpg" 
})
me3.addEventListener('mouseover', () => {
    imgMe.src = "img/moi.gif"
})





















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