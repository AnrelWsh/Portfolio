<?php 
    $pageTitle = "Home - Anrel Portfolio";
    $pageDescription = "Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will introduce himself (by the way, he's looking for aprenticeship ;)).";    
    $pageSnippet =     
      '<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Discover Angel, a future fullstack developer",
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
      </script>';
    require "doctype.php";
    require "header.php";
?>

    <main>    
      <div class="sep">
        <div class="sep-line"></div>
        <img src="img/anrel.png" alt="Logo Anrel Separation">
        <div class="sep-line"></div>
      </div>

      <section class="me">
        <h2 id="titi" class="zoom ">
          Angel ?
        </h2>
        <div class="me-content afterzoom">
          <div class="me-txt">
            <p id="me1">
              - Student at <a href="https://www.iim.fr/" rel="nofollow">IIM Digital School</a> (Institute of Internet and Multimedia)
            </p>
            <p id="me2">
              - Looking for a work-study / apprenticeship for September 2023
            </p>
            <p id="me3">
              - Future Fullstack developer, but more focused on the Front-End
            </p>
          </div>
          <img id="imgMe" src="img/logoIIM.png" alt="Me Section Images">
        </div>
      </section>
    </main>

    <?php 
      require "footer.php";
    ?>

  </body>

  <?php 
    require "javaCall.php";
  ?>
  
</html>