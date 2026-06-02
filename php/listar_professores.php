<?php

include("conexao.php");

$sql = "SELECT * FROM professor";

$result = $conn->query($sql);

$professores = [];

while($row = $result->fetch_assoc()){

    $professores[] = $row;

}

echo json_encode($professores);

?>