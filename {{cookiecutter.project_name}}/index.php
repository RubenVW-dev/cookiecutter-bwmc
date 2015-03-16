<?php

$_SESSION['lang'] = 'en';
$WebsiteTitle = '{{cookiecutter.project_name}}';
$PageTitle = '';
$Keywords = '';
$Description = '{{cookiecutter.project_description}}';
$WebsiteImage = '';
$WebsiteUrl = '{{cookiecutter.project_url}}';

?>

<!DOCTYPE html>
<!--[if lt IE 9]><html class="ie" lang="<?php echo $_SESSION['lang'] ?>"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class="no-js" lang="<?php echo $_SESSION['lang'] ?>">
<!--<![endif]-->
<head>
    <title><?php echo $WebsiteTitle ?> | <?php echo $PageTitle ?></title>

    <meta charset="UTF-8">
    <meta content="telephone=no" name="format-detection">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="Author" content="<?php echo $WebsiteTitle ?>">
    <meta name="keywords" content="<?php echo $Keywords ?>">
    <meta name="description" content="<?php echo $Description ?>">
    <meta property="og:title" content="<?php echo str_replace('&','&amp;',$PageTitle) ?>" />
    <meta property="og:site_name" content="<?php echo str_replace('&','&amp;',$WebsiteTitle)?>"/>
    <meta property="og:url" content="<?php echo $WebsiteUrl . $_SERVER['REQUEST_URI']?>"/> 
    <meta property="og:description" content="<?php echo str_replace('&','&amp;',$Description) ?>" />
    <meta property="og:image" content="<?php echo $WebsiteImage?>" />
    <meta name="DC.Title" content="<?php echo str_replace('&','&amp;',$PageTitle); ?>">
    <meta name="DC.Creator" content="<?php echo(str_replace('&','&amp;',$WebsiteTitle));?>">
    <meta name="DC.Description" content="<?php echo str_replace('&','&amp;',$Description); ?>">
    <meta name="DC.Publisher" content="<?php echo(str_replace('&','&amp;',$WebsiteTitle));?>">
    <meta name="DC.Type" content="Text">
    <meta name="DC.Language" content="<?php echo($_SESSION['lang']);?>">
    <!--<script src="//use.typekit.net/yoz0inc.js"></script>-->
    <!--<script>try{Typekit.load();}catch(e){}</script>-->
    
    <link rel="stylesheet" href="/src/css/style.css" />
    <script src="/src/js/vendor/modernizr.js"></script>
    
    <link href="<?php echo $websiteURL; ?>/img/favicon.ico" rel="shortcut icon" type="image/ico" />
</head>
<body>
    <script src="/src/js/vendor/jquery.min.js"></script>
    <script src="/src/js/vendor/bootstrap.min.js"></script>
    <script src="/src/js/vendor/underscore-min.js"></script>
    <script src="/src/js/vendor/respond.js"></script>
    <script src="/src/js/app.js"></script>
</body>
</html>