<?php
header('Content-Type: application/json'); // Conexão JSON que será feita com o navegador
file_get_contents('php://input'); // Feito para ler as informações e o principal que são as requisições

$resposta = 
[
'resposta' => 'Ok',
'aviso' => 'Formulário enviado com sucesso!'
];

echo json_encode($resposta)
?>