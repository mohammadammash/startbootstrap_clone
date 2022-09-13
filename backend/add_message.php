<?php
include("connection.php");

$name = $_POST['full-name'];
$email = $_POST['email'];
$phone_nb = $_POST['phone-nb'];
$text = $_POST['message'];

// run query in two steps to avoid taking queries to delete dbs
$query = $mysqli->prepare("INSERT INTO message(name, email, phone_nb, message) VALUE (?,?,?,?)");
$query->bind_param('ssss', $name, $email, $phone_nb, $text); //change to ?,? to strings vars
$uery->execute();

$response = [];
$response['success'] = true;

echo json_encode($response);
?>