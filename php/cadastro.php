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
    $telefone = $_POST['telefone'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (matricula, nome, email, cpf, telefone, senha)
            VALUES ('$matricula', '$nome', '$email', '$cpf', '$telefone', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo "Cadastro realizado!<br>";
        echo "Sua matrícula é: <strong>$matricula</strong>";
    } else {
        echo "Erro: " . $conn->error;
    }
}
?>