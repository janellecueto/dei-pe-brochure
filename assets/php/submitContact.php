<?php

include("config.php");
include("generateRaw.php");

$name = str_replace("'", '"', $_POST['name']);
$email = $_POST['email'];
$phone = $_POST['phone'];
$comments = str_replace("'", '"', $_POST['comments']);

$timestamp = date('Y-m-d');
$timestamp .= " ".date('h:i:s A');

$conn = new mysqli($host, $username, $password, $defaultTbl);
if($conn->errno){
    echo "Error: ".$conn->error;
    exit;
}

$query = "INSERT INTO contact_log (`name`, email, phone, comments, `timestamp`) VALUES ('$name', '$email', '$phone', '$comments', '$timestamp')";

if($conn->query($query)){
    echo 1;
} else {
    echo 0;
}

$subject = "DEI-PE.COM web form submission";
$message = "\nWeb form submission details:\n\n";
$message .= "   Name: $name\n";
$message .= "   Email: $email\n";
$message .= "   Phone: $phone\n";
$message .= "   Commends: $comments\n\n";
$message .= "Sent $timestamp\n";

GenerateRaw("wf-".date('ymdthis'), "noreply@dei-pe.com", "jay.tolbert@dei-pe.com", $subject, $message);

$conn->close();

