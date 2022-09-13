<?php
include("connection.php");

$query = $mysqli->prepare("Select name, email, phone_nb, text  FROM messages");
$query->execute();
$array = $query->get_result();

$response = [];
while ($a = $array->fetch_assoc()) {
    $response[]  = $a;
}

echo json_encode(($response));
?>