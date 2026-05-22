<?php

include("conexao.php");

$id = $_POST['id'];

$sql = "DELETE FROM solicitacoes_treino
WHERE id = '$id'";

if($conn->query($sql)){

    echo "Solicitação excluída!";

}else{

    echo "Erro ao excluir.";

}

?>