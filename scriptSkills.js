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

