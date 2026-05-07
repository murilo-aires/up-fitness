<?php
session_start();

    header("Location: login.php");
    exit();


echo "Bem-vindo! Sua matrícula é: " . $_SESSION['matricula'];
?>