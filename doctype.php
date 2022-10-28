<!DOCTYPE html>
<html lang="en" id="html">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Angel Hmeli">
    <meta name="description" content="<?php echo $pageDescription; ?>">
    <meta name="robots" content="max-snippet:-1, max-image-preview:standard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php 
            echo $pageTitle;
        ?>
    </title>

    <meta name="og:title" property="og:title" content="<?php echo $pageTitle; ?>">
    <meta name="og:author" content="Angel Hmeli">
    <meta name="og:description" content="<?php echo $pageDescription; ?>">
    <meta name="og:image" content="img/landingscreen.jpg">
    
    <?php echo 
      $pageSnippet; 
    ?>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="img/anrel.png">
    <link rel="stylesheet" href="build.css">
</head>

