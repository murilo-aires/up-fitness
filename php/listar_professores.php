<?php

include("conexao.php");

$sql = "SELECT * FROM usuarios";

$result = $conn->query($sql);

$professores = [];

while($row = $result->fetch_assoc()){

    // SOMENTE QUEM TEM CREF
    if(!empty($row['cref'])){

        $professores[] = $row;

    }

}

echo json_encode($professores);

?>