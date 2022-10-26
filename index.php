<?php 
    $pageTitle = "Home - Anrel Portfolio";
    require "doctype.php";
    require "header.php";
?>

    <main>    
      <div class="sep">
        <div class="sep-line"></div>
        <img src="img/anrel.png" alt="Logo Separation">
        <div class="sep-line"></div>
      </div>

      <section class="me">
        <h2 id="titi" class="zoom ">
          Angel ?
        </h2>
        <div class="me-content afterzoom">
          <div class="me-txt">
            <p id="me1">
              - Student at IIM Digital School (Institute of Internet and Multimedia)
            </p>
            <p id="me2">
              - Looking for a work-study / apprenticeship for September 2023
            </p>
            <p id="me3">
              - Future Fullstack developer, but more focused on the Front-End
            </p>
          </div>
          <img id="imgMe" src="img/logoIIM.png" alt="Me images">
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