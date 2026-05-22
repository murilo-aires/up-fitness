<?php

include("conexao.php");

$sql = "SELECT * FROM solicitacoes_treino";

$result = $conn->query($sql);

$solicitacoes = [];

while($row = $result->fetch_assoc()){

    $solicitacoes[] = $row;

}

echo json_encode($solicitacoes);

?>