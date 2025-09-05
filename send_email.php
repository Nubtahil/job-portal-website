<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "example@mail.com";
    $subject = "New Contact Form Submission";
    $header = "From: " .$name ." < " . $email . " >\r\n";
    $headers = "Reply-To:", $email . "\r\n" ;
    $headers .= "Contenr-type: text/plain; charset=ntf-8\r\n";

    if(mail($to, $subject, $header, $headers)){
        http_response_code(200);
        echo "Email sent successfully.";
    } else {
        http_response_code(500);
        echo "Failed to send email.";
    }


} 
else {
        http_response_code(403);
        echo "Access denied.";
    }
?> 