<?php

include("conexao.php");

$matricula_aluno = $_POST['matricula_aluno'] ?? '';
$matricula_professor = $_POST['matricula_professor'] ?? '';
$nome_treino = $_POST['nome_treino'] ?? '';
$exercicios = $_POST['exercicios'] ?? '';

if(
    empty($matricula_aluno) ||
    empty($matricula_professor) ||
    empty($nome_treino) ||
    empty($exercicios)
){

    echo "Preencha todos os campos.";
    exit;

}

$sql = "INSERT INTO treinos
(
    matricula_aluno,
    matricula_professor,
    nome_treino,
    exercicios
)
VALUES
(
    '$matricula_aluno',
    '$matricula_professor',
    '$nome_treino',
    '$exercicios'
)";

if($conn->query($sql)){

    echo "Treino criado com sucesso!";

}else{

    echo "Erro: " . $conn->error;

}