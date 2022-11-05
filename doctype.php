<!----------------------INITIALISATION OF THE SCRIPT-------------------------->
<!DOCTYPE html>
<html lang="en" id="html">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!----------------------META TAGS FOR SEARCH ENGINE OPTIMISATION-------------------------->
    <meta name="author" content="Angel Hmeli"> <!--Name of the author-->
    <meta name="description" content="<?php echo $pageDescription; ?>"> <!--Page description in search engines-->
    <meta name="robots" content="max-snippet:-1"><!--Robots settings for searche engines-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--Vieewport init for responsive-->
    <title>
        <?php 
            echo $pageTitle;
        ?>
    </title>

    <!----------------------OPEN GRAPHS TAGS FOR SOCIAL MEDIA DISPLAY OPTIMISATION-------------------------->
    <meta name="og:title" property="og:title" content="<?php echo $pageTitle; ?>">
    <meta name="og:author" content="Angel Hmeli"><!--Name of the author-->
    <meta name="og:description" content="<?php echo $pageDescription; ?>"><!--Page description in social media displays-->
    <meta name="og:image" content="img/landingscreen.jpg"><!--Displayed image for social media posts-->
    
    <!----------------------CALLING DIFFERENT SNIPPETS FOR EACH PAGE-------------------------->
    <?php echo 
      $pageSnippet; 
    ?>

    <!----------------------FONT ADD-------------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/x-icon" href="img/anrel.png"><!--Document icon-->
    <link rel="stylesheet" href="css/build.css"><!--Style link-->
</head>

