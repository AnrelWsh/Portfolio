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
    element: '.magnet',
    position: "center"
  }
}
);

mm.init();


var skillsSec = document.getElementById("skills")

const frontEnd = document.getElementById("fe")
const backEnd = document.getElementById("be")
const adobeSkill = document.getElementById("adobe")
const otherSkill = document.getElementById("other")

const frontContent = document.getElementById("content-fe")
const backContent = document.getElementById("content-be")
const adobeContent = document.getElementById("content-adobe")
const otherContent = document.getElementById("content-other")

function reinitSkills() {
  skillsSec.classList.remove("skills-init")
  skillsSec.classList.add("skills-clicked")

  frontEnd.classList.remove("skills-title")
  backEnd.classList.remove("skills-title")
  adobeSkill.classList.remove("skills-title")
  otherSkill.classList.remove("skills-title")

  frontEnd.classList.remove("skills-selected")
  backEnd.classList.remove("skills-selected")
  adobeSkill.classList.remove("skills-selected")
  otherSkill.classList.remove("skills-selected")
}

frontEnd.addEventListener('click', () => {
  reinitSkills()

  otherSkill.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  frontEnd.classList.add("skills-selected")

  backContent.style.display = "none"
  otherContent.style.display = "none"
  adobeContent.style.display = "none"
  frontContent.style.display = "grid"

  frontEnd.style.gridArea = "selected"
  backEnd.style.gridArea = "skill1"
  adobeSkill.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

backEnd.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  otherSkill.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  backEnd.classList.add("skills-selected")

  frontContent.style.display = "none"
  otherContent.style.display = "none"
  adobeContent.style.display = "none"
  backContent.style.display = "grid"
  
  backEnd.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  adobeSkill.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

adobeSkill.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  otherSkill.classList.add("skills-title")
  adobeSkill.classList.add("skills-selected")

  frontContent.style.display = "none"
  otherContent.style.display = "none"
  backContent.style.display = "none"
  adobeContent.style.display = "grid"
  
  adobeSkill.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  backEnd.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

otherSkill.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  otherSkill.classList.add("skills-selected")
  

  frontContent.style.display = "none"
  adobeContent.style.display = "none"
  backContent.style.display = "none"
  otherContent.style.display = "grid"
  
  otherSkill.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  backEnd.style.gridArea = "skill2"
  adobeSkill.style.gridArea = "skill3"
})



const ratio = .3
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const intersect = function (entries, observer){
  entries.forEach(function (entry){
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible")
      document.addEventListener("mousemove", function(e) {  
        var ax = -(self.innerWidth/2- e.pageX)/20
        var ay = (self.innerHeight/10- e.pageY)/10
        document.getElementById("project-card1").style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
        document.getElementById("project-card2").style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
      })
      observer.unobserve(entry.target)
    }  
  
})}

const observer = new IntersectionObserver(intersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
  observer.observe(r)
})




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


  gsap.to("#skilz", {
      scrollTrigger: {
      trigger: "#skilz",
      scrub: 1,
      end: "-50 top",
      toggleActions : "play"
      },
      y: 170,
      x: 500,
  })


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