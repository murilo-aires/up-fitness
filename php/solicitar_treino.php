<?php

include("conexao.php");

$nome = $_POST['nome'];
$objetivo = $_POST['objetivo'];
$observacoes = $_POST['observacoes'];
$professor = $_POST['professor'];
$matricula_aluno = $_POST['matricula_aluno'];

$sql = "INSERT INTO solicitacoes_treino
(
    aluno_nome,
    objetivo,
    observacoes,
    professor_id,
    matricula_aluno
)
VALUES
(
    '$nome',
    '$objetivo',
    '$observacoes',
    '$professor',
    '$matricula_aluno'
)";

if($conn->query($sql)){

    echo 'Solicitação enviada com sucesso!';

}else{

    echo 'Erro: ' . $conn->error;

}

?>