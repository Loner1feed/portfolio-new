<?php
$info = $_POST['info'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$info = htmlspecialchars($info);
$mail = htmlspecialchars($mail);
$message = htmlspecialchars($message);

$info = urldecode($info);
$mail = urldecode($mail);
$message = urldecode($message);

$info = trim($info);
$mail = trim($mail);
$message = trim($message);

if(mail('l1feed.work@gmail.com','тестовый заголовок письма',$info,'Content-type: text/html; charset=utf-8')){
    echo 'Письмо успешно отправлено';
}
else{
    echo 'Ошибка отправки сообщения.';
}
?>

