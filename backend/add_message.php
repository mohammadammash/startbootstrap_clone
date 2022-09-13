<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");


$name = $_POST['name'];
$email = $_POST['email'];
$phone_nb = $_POST['phone_nb'];
$text = $_POST['message'];

// run query in two steps to avoid taking queries to delete dbs
$query = $mysqli->prepare("INSERT INTO messages(name, email, text, phone_nb) VALUE (?, ?, ?, ?)");
$query->bind_param('ssss', $name, $email, $text, $phone_nb); //change to ?,? to strings vars
$query->execute();

$response = [];
$response['success'] = true;

echo json_encode($response);
?>