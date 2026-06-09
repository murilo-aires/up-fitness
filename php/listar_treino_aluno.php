<?php

include("conexao.php");

$matricula = $_GET["matricula"];

$sql = "SELECT *
        FROM treinos_alunos
        WHERE matricula_aluno = '$matricula'
        ORDER BY id DESC";

$result = $conn->query($sql);

$treinos = [];

while($row = $result->fetch_assoc()){

    $treinos[] = $row;

}

echo json_encode($treinos);

?>