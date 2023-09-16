<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Navn"];
    $email = $_POST["Email"];
    $subject = $_POST["Emne"];
    $message = $_POST["Besked"];
    
    $to = "kristofferstaugaard@gmail.com"; // Change this to your email address
    $headers = "From: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    
    // You can also add additional logic, like redirecting to a thank you page.
    header("Location: thank-you.html");
    exit;
}
?>
