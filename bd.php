<?php
//connection BD
$cnx = new PDO("mysql:host=localhost; dbname=mysql", "root","", 
array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));


$requeteSql = " SELECT Nom FROM db ";

//on exectute le requete sa methoed query et sa retourne un pdostatement 
//$cnx ->query($sql) Retourne un PDOSTATEMENT
$pdoStatement = $cnx->query($requeteSql);

$liste = $pdoStatement->fetchAll();
print json_encode($liste);


?>