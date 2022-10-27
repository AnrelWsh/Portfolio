<!DOCTYPE html>
<html lang="en" id="html">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Angel Hmeli">
    <meta name="description" content="Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will show you all his skills and projects. You wanna be amazed? You'll be!">
    <meta name="robots" content="max-snippet:-1, max-image-preview:standard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php 
            echo $pageTitle;
        ?>
    </title>

    <meta name="og:title" property="og:title" content="<?php echo $pageTitle; ?>">
    <meta name="og:author" content="Angel Hmeli">
    <meta name="og:description" content="Welcome to this Incredible web portfolio. Here Angel, a future Fullstack developer, will show you all his skills and projects. You want to be amazed? You will be!">
    <meta name="og:image" content="img/landingscreen.jpg">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://example.com/apple-pie.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://example.com/blueberry-pie.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://example.com/cherry-pie.html"
        }]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="img/anrel.png">
    <link rel="stylesheet" href="build.css">
</head>

