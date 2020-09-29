//ajax3.js
//request vers un s script php avec deux parametres en mode GET
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
    xhr.open("GET", "hello2.php?name="//on demande a php de reagir a un parametre name(?) (querrystring)
                                    + nom
                                    +"&score="
                                    + score  ) ;

    // 3- On envoie la requete
    xhr.send();

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

}