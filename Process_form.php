<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $mobile_number = $_POST["mobile_number"];
    $email_subject = $_POST["email_subject"];
    $message = $_POST["message"];

    $to = "johnthejoker212@gmail.com";
    $subject = $email_subject;
    $message_body = "Full Name: $full_name\nEmail: $email\nMobile Number: $mobile_number\nMessage: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $message_body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
