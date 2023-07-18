<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $feedback = $_POST['feedback'];
    
    // Perform further processing, such as saving to a database or sending an email
    
    // Redirect the user to a thank you page
    header('Location: thank-you.html');
    exit;
  }
?>
