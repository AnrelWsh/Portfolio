<!----------------------INITIALISATION OF THE SCRIPT-------------------------->
<!DOCTYPE html>
<html lang="en" id="html">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <!----------------------META TAGS FOR SEARCH ENGINE OPTIMISATION-------------------------->
      <meta name="author" content="Angel Hmeli"> <!--Name of the author-->
      <meta name="description" content="Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will show you his newest website projects. You wanna be amazed? You'll be!"> <!--Page description in search engines-->
      <meta name="robots" content="max-snippet:-1"><!--Robots settings for searche engines-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--Vieewport init for responsive-->
      <title>Projects - Anrel Portfolio</title>

      <!----------------------OPEN GRAPHS TAGS FOR SOCIAL MEDIA DISPLAY OPTIMISATION-------------------------->
      <meta name="og:title" property="og:title" content="Projects - Anrel Portfolio">
      <meta name="og:author" content="Angel Hmeli"><!--Name of the author-->
      <meta name="og:description" content="Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will show you his newest website projects. You wanna be amazed? You'll be!"><!--Page description in social media displays-->
      <meta name="og:image" content="img/landingscreen.jpg"><!--Displayed image for social media posts-->
      
      <!----------------------CALLING DIFFERENT SNIPPETS FOR EACH PAGE-------------------------->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "Discover Angel`s marvelous projects",
          "image": [
            "img/",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
          ],
          "datePublished": "2022-10-10"
          "author": [{
              "@type": "Person",
              "name": "Angel Hmeli",
              "url": "https://www.instagram.com/a_aine_jai_eu_el/"
          }]
        }
      </script>

      <!----------------------FONT ADD-------------------------->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

      <link rel="icon" type="image/x-icon" href="img/anrel.png"><!--Document icon-->
      <link rel="stylesheet" href="css/build.css"><!--Style link-->
  </head>

  <body id="body">
    <header>
        <div id="divLoading"> <!--Display at page loading-->
            <img class="loading" src="img/anrelgif.gif" alt="Loading Logo Anrel GIF">
        </div>

        <section class="intro"> <!--White text and logo sliding at the top of the page-->
        <h1 id="ttlIntro">ANGEL HMELI'S WEB PORTFOLIO</h1>
        <img id="logoIntro" src="img/anrelgif.gif" alt="Logo Anrel GIF"></img>
        </section>

        <nav id="navbar"> <!--Navbar display-->
            <a href="#accueil"> <!--Website logo-->
                <img src="img/anrelgif.gif" alt="Logo Anrel GIF">
            </a>
            <div id="menu-btn" class="menu-btn-close"> <!--Page navigation logo-->
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="menu"><!--Page navigation display-->
                <div class="menu-nav">
                    <div class="sl">
                        <div id="slD1" ></div>
                        <a href="index.html">
                        <h3 class="select-menu"> Who am I? </h3>
                        </a>
                    </div>
                    <div class="sl">
                        <div id="slD2"></div>
                        <a href="skills.html">
                        <h3 class="select-menu"> My skills </h3>
                        </a>
                    </div>
                    <div class="sl">
                        <div id="slD3"></div>
                        <a href="projects.html">
                        <h3 class="select-menu"> My projects </h3>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="slide-title"> <!--Sliding text-->
            <p>ANGEL'S WEB PORTFOLIO</p>
            <p class="slide-title-reverse">ANGEL'S WEB PORTFOLIO</p>
        </div>

        <div class="sep"> <!--Separation text-->
            <div class="sep-line"></div>
            <img src="img/anrel.png" alt="Logo Anrel Separation">
            <div class="sep-line"></div>
        </div>
    </header>


    <main>     
      <section id="projects" class="projects"> <!--Page content-->
        <h2 id="project-heading" class="zoom ">Projects</h2>
        <div class="project1 reveal">
          <div class="project-card" id="project-card1"></div>
          <div class="project-txt">
            <h4>Anrel Smart Clothes</h4>
            <p>Anrel Smart Clothes is a website where you can see the new Anrel connected hoodie, linked to its app. You can also read all the articles in the blog, post comments and many others things!</p>
            <a href="http://www.anrelsmartclothes.tk/home.php" target="_blank"><p class="magnet">See Project</p></a>
          </div>
        </div>
        <div class="project2 reveal">
          <div class="project-card" id="project-card2"></div>
          <div class="project-txt">
            <h4>Rueil Website</h4>
            <p>This website was made to make people discover the city of Rueil-Malmaison. A beautiful city with its plains, the Seine and its wild grid displays !</p>
            <a href="https://anrelwsh.github.io/ProjetRueil/" target="_blank"><p class="magnet">See Project</p></a>
          </div>
        </div>
        <div class="project3 reveal">
          <div class="project-card" id="project-card3"></div>
          <div class="project-txt">
            <h4>Hobbie Website</h4>
            <p>This website was made to make people discover my hobbie: the music. Here I'll tell you what and why I like. There are also artist pages to make you dicover some of them.</p>
            <a href="https://sitepassion.vercel.app/" target="_blank"><p class="magnet">See Project</p></a>
          </div>
        </div>
      </section>
    </main>

    <!--Footer content-->
    <footer>
        <h2 id="contact" >CONTACT</h2>
        <h3>If you like my work, just contact me !</h3>
        <a id="cv" class="select-menu" href="img/cv.pdf" target="_blank">
            <h4>Resume</h4>
        </a>
        <img id="gifFoot" src="img/anrelgif.gif" alt="Logo Anrel GIF">
        <div id="mycontact">
            <a class="select-menu" href="https://www.instagram.com/a_aine_jai_eu_el/" target="_blank"><img src="img/insta.svg" alt="Contact Instagram"></a>
            <a class="select-menu" href="https://github.com/AnrelWsh?tab=repositories" target="_blank"><img src="img/github.svg" alt="Contact Github"></a>
        </div>
    </footer>

  </body>

  <!--Calling APIs -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
  <script src="node_modules/magnet-mouse/lib/magnet-mouse.min.js"></script>

  <!--Calling javascript-->
  <script src="js/script.js"></script>

</html>