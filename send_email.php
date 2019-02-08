<?php
$email_to = 'your@email.com'; //your email
$business = 'Business Name'; //business name
$topic = $_POST['topic'];
$name = $_POST['name'];
$email_from = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$autoResponse = true; //set to false if you don't want to send an auto reply
$autoResponseSubject = "Demo Contact Form";
$autoResponseMessage = "Hi, thank you testing the JQuery Contact Form Demo.";
$autoResponseHeaders = "From: $business <$email_to>\r\n";
$autoResponseHeaders .= "Reply-To: $business <$email_to>\r\n";

$headers = "From: $name <$email_from>\r\n";
$headers .= "Reply-To: $name <$email_from>\r\n";

if(@mail($email_to, $topic.': '.$subject, $message, $headers)){
 if($autoResponse === true){
  mail($email_from, $autoResponseSubject, $autoResponseMessage, $autoResponseHeaders);
 }
 echo '1';
} else {
 echo '0';
}
?>