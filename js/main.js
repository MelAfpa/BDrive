// Mise à jour du nombre d'articles pour le bouton panier
majCompteurPanier();

addConnex();

function majCompteurPanier() {
    nbrArticle = sessionStorage.getItem("NbArticle");
    nbrArticlePanier.innerHTML = nbrArticle;
};

/**
 * Affiche un check à côté de l'icone "mon compte" une fois que l'utilisateur est connecté à son compte
 */
function addConnex(){
    var spanAddConnex = document.getElementById("connex");
    var bFlag = sessionStorage.getItem("bFlag");
    if (bFlag === "false"){
        spanAddConnex.innerHTML = " done ";
        console.log(bFlag);
    } 
    
}
