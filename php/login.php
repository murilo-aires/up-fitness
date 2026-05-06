<?php
session_start();
include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $matricula = $_POST['matricula'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE matricula = '$matricula'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {

        $user = $result->fetch_assoc();

        if (password_verify($senha, $user['senha'])) {
            echo "<script>
            localStorage.setItem('matricula', '$user[matricula]');
            localStorage.setItem('nome', '$user[nome]');
            localStorage.setItem('cpf', '$user[cpf]');
            localStorage.setItem('telefone', '$user[telefone]');
            window.location.href = '../html/perfil.html';
            </script>";
            exit();
        } else {
            echo "Senha incorreta!";
        }

    } else {
        echo "Matrícula não encontrada!";
    }
}
?>