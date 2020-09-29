
/*
//ajax4.js
//request vers un s script php avec deux parametres avec un POST
onload = init;

function init() {
    ajaxCall();
}

//-----------------------
// function ajaxCall()
function ajaxCall() {

    let nom = "Bob";
    let score = 100;

    // 1- on instancie un objet 'ajax'
    let xhr = new XMLHttpRequest();//on creer l'objet
    console.log(xhr);

    // 2- On établie une connexion
    xhr.open("POST", "hello2.php");

          //Obligatoire quand on POST
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//obligatoire de changer l'entete pour poster

    // 3- On envoie la requete
    xhr.send("name" + nom + "&score=" + score);

    // 4- On écoute le changement du readyState
    xhr.onreadystatechange = function () { //on lui colle une fonction anonyme

        if (xhr.readyState === 4 && xhr.status === 200) { //quand la reponse est prete=> 
            //1.etat de la requete == 4 (reponse prete)
            //2.status == 200 (la reponse existe)
            let data = xhr.responseText; // responseXML//une maniere d'ecouter la reponse
            //console.log(data);
            processResponse(data);
        }

    };
}


//-----------------------
// function ajaxCall()
function processResponse(data) { //fonction pour decortiquer le resultat de la requete

    document.getElementById("output").innerHTML = data; //(innerHTML modifier le contenu)

}*/


//Request vers un script php avec 2 var en mode POST
onload = init;

function init() {
    ajaxCall();
}

//function  ajaxCall()
function ajaxCall() {

    //Param en dur pour test
    let nom = "Lud972vic";
    let score = 100;

    //On instancie un objet 'ajax'
    let xhr = new XMLHttpRequest();
    console.log(xhr);

    //On établit une connexion
    xhr.open("POST", "hello2.php");

    //Obligatoire quand on POST
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //On envoie la requete
    xhr.send("name=" + nom + "&score=" + score);

    //On écoute le changement du readyState
    xhr.onreadystatechange = function () {
        //le readyState == 4 (4=réponse prête)
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = xhr.responseText; // xhr.responseXML
            //console.log(data);
            processResponse(data);
        }
    };
}

//function  processResponse()
function processResponse(data) {
    document.getElementById("output").innerHTML = data;
}