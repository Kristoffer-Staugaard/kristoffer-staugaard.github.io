<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Navn"];
    $email = $_POST["Email"];
    $subject = $_POST["Emne"];
    $message = $_POST["Besked"];

    // Recipient email address
    $to = "kristofferstaugaard@gmail.com";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email could not be sent.";
    }
}
?>
