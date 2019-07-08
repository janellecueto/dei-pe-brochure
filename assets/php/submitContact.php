<?php

include("config.php");

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

$conn->close();

