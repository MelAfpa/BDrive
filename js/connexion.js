// ------------------------- PROGRAMME PRINCIPAL -------------------------
// Initialisation des variables
var form = document.getElementById("formConnexion");
var spanErr = document.getElementById("errconnexionEmail");
var spanErrMdp = document.getElementById("errconnexionMDP");
var bErreurConnexion = false;

/**
 * Contrôles de l'identifiant et du mot de passe saisis par l'utilisateur, puis
 * stockage des informations valides dans la session après la connexion
 * @param {object} e est un objet évènement rattachée à la méthode preventDefault
 */
form.addEventListener("submit", (e) => {

    var mail = document.getElementById("connexionEmail").value;  
    var mdp = document.getElementById("connexionMDP").value;   

    if((mail !== comptes.get("1").identifiant) || (mdp !== comptes.get("1").mdp)){
        spanErr.innerHTML = "Identifiant ou mdp incorrect";
        spanErr.style.color = "red";
        bErreurConnexion = true;
        e.preventDefault();
    } else {
        bErreurConnexion = false;
        sessionStorage.setItem("Identifiant : ", mail);
        sessionStorage.setItem("Mot de passe : ", mdp);
        sessionStorage.setItem("bFlag", bErreurConnexion)
        addConnex();
    }

});

