<?php

include("conexao.php");



// DADOS
$aluno = $_POST['aluno'];

$exercicio = $_POST['exercicio'];

$series = $_POST['series'];

$matricula = $_POST['matricula'];



// VALIDAR CAMPOS
if(
    empty($aluno) ||
    empty($exercicio) ||
    empty($series) ||
    empty($matricula)
){

    echo "Preencha todos os campos.";

    exit;

}



// INSERIR TREINO
$sql = "INSERT INTO treinos_alunos

(aluno_nome, exercicio, series, matricula_aluno)

VALUES

('$aluno', '$exercicio', '$series', '$matricula')";



if($conn->query($sql)){

    echo "Treino criado com sucesso!";

}else{

    echo "Erro ao salvar treino: " . $conn->error;

}

?>