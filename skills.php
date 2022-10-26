<?php 
    $pageTitle = "Skills - Anrel Portfolio";
    require "doctype.php";
    require "header.php";
?>
   
    <main>    
      <div class="sep">
        <div class="sep-line"></div>
        <img src="img/anrel.png" alt="Logo Separation">
        <div class="sep-line"></div>
      </div>

      <section id="skills" class="skills-init">
        <h2 id="skilz">My skills</h2>
        <h3 id="fe" class="magnet">Front-End </h3>
        <h3 id="be" class="magnet">Back-End </h3>
        <h3 id="adobe" class="magnet">Adobe </h3>
        <h3 id="other" class="magnet">Other </h3>
        <div class="skills-clicked-content" id="content-fe">
          <img class="logo1" src="img/skills/html.svg" alt="HTML Logo">
          <img class="logo2" src="img/skills/css.svg" alt="CSS Logo">
          <img class="logo3" src="img/skills/js.svg" alt="JS Logo">
          <img class="logo4" src="img/skills/sass.svg" alt="SASS Logo">
          <img class="logo5" src="img/skills/wp.svg" alt="Wordpress Logo">
        </div>
        <div class="skills-clicked-content" id="content-be">
          <img class="logo1" src="img/skills/php.svg" alt="PHP Logo">
          <img class="logo2" src="img/skills/mysql.svg" alt="MYSQL Logo">
          <img class="logo3" src="img/skills/laragon.svg" alt="Laragon Logo">
          <img class="logo4" src="img/skills/pma.png" alt="PhpMyAdmin Logo">
          <img class="logo5" src="img/skills/tableplus.png" alt="TablePlus Logo">
        </div>
        <div class="skills-clicked-content" id="content-adobe">
          <img class="logo1" src="img/skills/photoshop.svg" alt="Photoshop Logo">
          <img class="logo2" src="img/skills/xd.svg" alt="Adobe XD Logo">
          <img class="logo3" src="img/skills/illus.svg" alt="Illustrator Logo">
          <img class="logo4" src="img/skills/prempro.svg" alt="Premiere Pro Logo">
          <img class="logo5" src="img/skills/aftereff.svg" alt="After Effects Logo">
        </div>
        <div class="skills-clicked-content" id="content-other">
          <img class="logo1" src="img/skills/wp.svg" alt="Wordpress Logo">
          <img class="logo2" src="img/skills/git.svg" alt="Git Logo">
          <img class="logo3" src="img/skills/figma.svg" alt="Figma Logo">
          <img class="logo4" src="img/skills/uxui.png" alt="UX-UI Logo">
          <img class="logo5" src="img/skills/teamwork.png" alt="TeamWork Logo">
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