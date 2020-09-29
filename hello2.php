<?php
// verifie un param 'name' et 'score'
$name = null;
$score = null;
if(isset($_GET['name'])) $name= $_GET['name'];
if(isset($_GET['score'])) $score= $_GET['score'];

print("I got a param named 'name' which value is " .$name. " and a 
 value's score parametre  is " .$score)

?>