<?php
include("conexao.php");

function gerarMatricula() {
    return rand(100000000, 999999999);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $matricula = gerarMatricula();
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cpf = $_POST['cpf'];
    $cref = $_POST['cref'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO professor (matricula, nome, email, cpf, cref, senha)
            VALUES ('$matricula', '$nome', '$email', '$cpf', '$cref', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo "Cadastro realizado!<br>";
        echo "Sua matrícula é: <strong>$matricula</strong>";
    } else {
        echo "Erro: " . $conn->error;
    }
}
?>