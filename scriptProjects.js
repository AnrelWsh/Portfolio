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

/**INIT MAGNET MOUSE API */

let mm = new MagnetMouse({
  magnet: {
    element: '.magnet',
    position: "center"
  }
}
);
mm.init();


/**FADE APPARITION OF PROJECTS WITH ITERSECTION OBSERVER API AND IMAGE MOVING WITH CURSOR ON IT*/

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
        var ax = (self.innerWidth/2- e.pageX)/20
        var ay = (self.innerHeight/10- e.pageY)/10
        var ay =- ay + 180
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

