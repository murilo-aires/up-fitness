<?php

include("conexao.php");

$nome = $_POST['nome'];
$objetivo = $_POST['objetivo'];
$observacoes = $_POST['observacoes'];
$professor = $_POST['professor'];

$sql = "INSERT INTO solicitacoes_treino
(aluno_nome, objetivo, observacoes, professor_id)

VALUES
('$nome', '$objetivo', '$observacoes', '$professor')";

if($conn->query($sql)){

    echo "Solicitação enviada com sucesso!";

}else{

    echo "Erro: " . $conn->error;

}

?>