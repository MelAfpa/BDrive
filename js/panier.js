var tIdAlbums = JSON.parse(sessionStorage.getItem("idAlbums"));
var tIdentifiant = [];
var tQuantite = [];
var montantArticle = 0;

determineQantite(tIdAlbums);

listeArticle()

calculMontantTotal()


// -----------------------LES FONCTIONS------------------------

/**
 * Complète 2 tableaux  --> le 1er avec les identifiants des BDs en supprimant les doublons
 *                      --> le 2ème détermine la quantité de chaque BD
 * @param {array} tab Tableau "tIdAlbums" qui récupère les id enregistrés dans sessionStorage
 */
function determineQantite(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tIdentifiant.includes(tab[i])) {
            let index = tIdentifiant.indexOf(tab[i])
            tQuantite[index] = tQuantite[index]+1;
        } else {
            tIdentifiant.push(tab[i]);
            tQuantite.push(1);
        }
    }
}

/**
 *  Passe en boucle le tableau des identifiants triés pour les afficher
 */
function listeArticle() {
    for (let i = 0; i < tIdentifiant.length; i++) {
        afficheArticle(tIdentifiant[i], tQuantite[i]);
    }
};

/**
 * Affiche les différentes BDs ajoutés au panier puis calcul le montant total
 * @param {*} identifiant 
 * @param {*} quantite 
 */
function afficheArticle(identifiant, quantite) {
    var album = albums.get(identifiant);

    // Récupérer les balises parents
    var listePanier = document.getElementById("listePanier");

    // Créer chaque élément
    var newDivCard = document.createElement("div");
    var newDivRow = document.createElement("div");
    var newDivCol1 = document.createElement("div");
    var newImg = document.createElement("img");
    var newDivCol2 = document.createElement("div");
    var newDivCardBody = document.createElement("div");
    var newCardTitle = document.createElement("h5");
    var newCardText = document.createElement("p");
    var newDiv = document.createElement("div");
    var newInput = document.createElement("input");
    var newSpanSupp = document.createElement("span");
    var newSpanPrix = document.createElement("span");

    // Ajout des class pour les éléments
    newDivCard.setAttribute("class", "card mb-3 cartePanier");
    newDivRow.setAttribute("class", "row g-0 align-items-center");
    newDivCol1.setAttribute("class", "col-sm-2 col-md-3 col-lg-2 correctif1");
    newDivCol2.setAttribute("class", "col-sm-10 col-md-9 col-lg-10 correctif2");
    newDivCardBody.setAttribute("class", "card-body");
    newCardTitle.setAttribute("class", "card-title");
    newCardText.setAttribute("class", "card-text");
    newSpanSupp.setAttribute("class", "material-symbols-outlined align-middle");
    newSpanPrix.setAttribute("class", "float-end");

    // Modification des valeurs de l'image
    var nomFic =  series.get(album.idSerie).nom + "-" + albums.get(identifiant).numero + "-" + albums.get(identifiant).titre;
    nomFic = nomFic.replace((/('|!|\?|\.|"|:|\$)/g), "");
    newImg.setAttribute("class", "rounded imgPanier");
    newImg.src = "..//images/albumsMini/" + nomFic + ".jpg";
	newImg.alt = "";

    // Ajout de l'input pour la quantité
    newInput.setAttribute("id", "idQuantity");
    newInput.setAttribute("name", "quantity");
    newInput.setAttribute("min", "1");
    newInput.setAttribute("value", quantite);
    newInput.setAttribute("type", "number");
    newInput.setAttribute("class", "form-control form-control-sm float-start");

    // Ajout des textes pour les éléments créés
    newCardTitle.innerHTML = albums.get(identifiant).titre;
    newCardText.innerHTML = auteurs.get(album.idAuteur).nom;
    newSpanSupp.innerHTML = "delete";
    newSpanPrix.innerHTML = albums.get(identifiant).prix * quantite + " €";

    // Détermine les parents de chaque élément créé
    newDiv.appendChild(newInput);
    newDiv.appendChild(newSpanSupp);
    newDiv.appendChild(newSpanPrix);

    // Détermine les parents de chaque élément créé
    newDivCardBody.appendChild(newCardTitle);
    newDivCardBody.appendChild(newCardText);
    newDivCardBody.appendChild(newDiv);

    newDivCol2.appendChild(newDivCardBody);

    newDivCol1.appendChild(newImg);

    newDivRow.appendChild(newDivCol1);
    newDivRow.appendChild(newDivCol2);

    newDivCard.appendChild(newDivRow);

    listePanier.appendChild(newDivCard);

    // Calcul le montant de tous les articles
    montantArticle = montantArticle + albums.get(identifiant).prix * quantite;
};

/**
 *  Calcul le montant total et la TVA puis l'affiche dans le panier
 */
function calculMontantTotal() {
    var montantTotal = (montantArticle + 4.99).toFixed(2);
    var montantHT = (montantTotal / 1.2).toFixed(2);
    var tva = (montantTotal - montantHT).toFixed(2);

    var idSousTotal = document.getElementById("idSousTotal");
    var idTotal = document.getElementById("idTotal");
    var idTva = document.getElementById("idTva");

    idSousTotal.innerHTML = montantArticle + " €";
    idTotal.innerHTML = montantTotal + " €";
    idTva.innerHTML = tva + " €";
};