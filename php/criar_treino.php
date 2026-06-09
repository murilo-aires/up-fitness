<?php

include("conexao.php");

$aluno = $_POST["aluno"];
$professor = $_POST["professor"];
$nomeTreino = $_POST["nomeTreino"];
$exercicios = $_POST["exercicios"];

$sql = "INSERT INTO treinos
(
    matricula_aluno,
    matricula_professor,
    nome_treino,
    exercicios
)
VALUES
(
    '$aluno',
    '$professor',
    '$nomeTreino',
    '$exercicios'
)";

if(mysqli_query($conexao, $sql)){
    echo "Treino enviado com sucesso!";
}else{
    echo "Erro ao enviar treino.";
}