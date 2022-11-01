<?php 
    $pageTitle = "Home - Anrel Portfolio"; //Document title
    $pageDescription = "Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will introduce himself (by the way, he's looking for aprenticeship ;)).";    //Document description on search results

    /**PAGE SNIPPETS FOR SEARCH ENGINE OPTIMISATION */
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
    require "doctype.php";  //Calling for the doctype
    require "header.php";  //Calling for the header
?>

    <main>    
      <section class="me">  <!--Page content-->
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
      require "footer.php";  //Calling for the footer
    ?>

  </body>

  <?php 
    require "javaCall.php";  //Calling for the javascript document and APIs
  ?>
  
</html>