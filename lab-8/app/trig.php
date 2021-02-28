<?php
$header = file_get_contents('header.html');
$page_content = file_get_contents('trig.html');
$footer = file_get_contents('footer.html');
?>
<?php echo $header ?>
<?php echo $page_content ?>
<?php echo $footer ?>
