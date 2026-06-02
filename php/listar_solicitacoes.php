<?php

include("conexao.php");

$professor = $_GET['professor'];

$sql = "SELECT *
        FROM solicitacoes_treino
        WHERE professor_id = '$professor'
        ORDER BY data_solicitacao DESC";

$result = $conn->query($sql);

$solicitacoes = [];

while($row = $result->fetch_assoc()){

    $solicitacoes[] = $row;

}

echo json_encode($solicitacoes);

?>