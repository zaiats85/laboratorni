<?php

require_once('config.php');
$header = file_get_contents('header.html');
$page_content = file_get_contents('page-content.html');
$footer = file_get_contents('footer.html');

// define variables and set to empty values
$type = $material = $quantity = $html = "";
$date = new DateTime('now');
$order_date = $date->format('y-m-d H:i:s');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $type = test_input($_POST['furniture_type']);
    $material = test_input($_POST['furniture_material']);
    $quantity = test_input($_POST['quantity']);
    $html = "<div class='w3-container'>
     <h5 class='w3-opacity'>
        <b>Ваше замовлення від
            <span class='w3-text-teal'>
                <i class='fa fa-calendar fa-fw w3-margin-right'></i>
                    $order_date
            </span>прийнято
        </b>
    </h5>
    <h3> Замовлено виріб <b>$furniture[$type]</b>, 
         матеріал <b>$wood[$material]</b>, 
         Кількість <b>$quantity</b>.
    </h3>
    <br>
    <h6> Дякуємо за ваше замовлення!</h6>
</div>";
} else {
    $html = "<b>Вам сюди не можна.</b>";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
<?php echo $header ?>
<?php echo $html ?>
<?php echo $footer ?>
