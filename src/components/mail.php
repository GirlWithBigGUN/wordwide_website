<?php


if (!isset($_POST['name']) || !isset($_POST['phone'])) {
    return;
}

$name = $_POST['name'];
$from_email = $_POST['email'];

$message = "Новая заяка на обучение от ".$name."<br>
Телефон: ".$_POST['phone']."<br>
Электронная почта: ".$from_email;

$subject = "Заявка "$_POST['name'].;

//$to_email = 'justdoitalreadynow31@gmail.com';
$to_email = 'justdoitalreadynow31@gmail.com';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: '.$name.' <'.$to_email.'>';
mail($to_email, $subject, $message, implode("\r\n", $headers));

?>