<?php 
$name= $_POST['name'];
$email= $_POST['email'];
$service= $_POST['service'];
$budget= $_POST['budget'];
$message= $_POST['message'];
$subject="INQUIRY: $service , $budget";
$content= " Name: $name \n Email: $email \n Service: $service \n Budget: $budget \n Message: $message";
$recipient= 'jeffrey.d.helder@gmail.com';
$header = "From: $email \r\n";

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("/r","/n","%0a","%0d"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['subject'])){
    $subject= filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
}

if(isset($_POST['message'])){
    $message = $_POST['message'];
}

mail($recipient, $subject, $content, $header) or die("Your message didn't seem to send. Maybe try again, later?");
echo "Thank you for your email, ", $name, ". ";
?>