<?php
// verifie un param 'name' et 'score'
$name = null;
$score = null;

if(isset($_GET['name'])) $name= $_GET['name'];
if(isset($_GET['score'])) $score= $_GET['score'];

if(isset($_POST['name'])) $name= $_POST['name'];
if(isset($_POST['score'])) $score= $_POST['score'];



 if(isset($_GET['name'])){
    print("I got a param named 'name' which value is " .$name. " and a 
    value's score parametre  is " .$score);
 }
 if(isset($_POST['name'])){
    print("I got a param named 'name' which value is " .$name. " and a 
    value's score parametre  is " .$score);
 }

?>