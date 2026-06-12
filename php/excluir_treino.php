<?php

include("conexao.php");

$id = $_POST["id"];

$sql = "DELETE FROM treinos
        WHERE id = '$id'";

if($conn->query($sql)){

    echo "Treino excluído com sucesso!";

}else{

    echo "Erro: " . $conn->error;

}

?>