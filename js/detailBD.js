// Récupération de l'url dans la page detailsBD.html puis l'id de la bd
var recupLien = location.search.substring(1).split("=");
var idBd = recupLien[1];

afficherInfoBd(idBd);

/**
 * Affiche la BD sélectionné dans la page liste des BDs
 * @param {*} identifiant 
 */
function afficherInfoBd(identifiant) {
    var album = albums.get(identifiant);

    // Récupérer les balises parents
    var imgBd = document.getElementById("imgInfoBd");
    var idTitle = document.getElementById("idTitle");
    var idAuthor = document.getElementById("idAuthor");
    var idCollection = document.getElementById("idCollection");
    var idNumber = document.getElementById("idNumber");
    var idPrice = document.getElementById("idPrice");

    // Créer chaque élément
    var newImg = document.createElement("img");
    var newH1 = document.createElement("h1");
    var newSpanAuteur = document.createElement("span");
    var newSpanSerie = document.createElement("span");
    var newSpanNumeros = document.createElement("span");
    var newSpanPrix = document.createElement("span");

    // Modification des valeurs de l'image.
    var nomFic =  series.get(album.idSerie).nom + "-" + albums.get(identifiant).numero + "-" + albums.get(identifiant).titre;
    nomFic = nomFic.replace((/('|!|\?|\.|"|:|\$)/g), "");
    newImg.setAttribute("class", "imageDetail rounded img-fluid");
    newImg.src = "../images/albums/" + nomFic + ".jpg";
	newImg.alt = "";

    newSpanPrix.setAttribute("class", "float-end fs-4");

    // Ajout des textes pour les éléments créés
    newH1.innerHTML = albums.get(identifiant).titre;
    newSpanAuteur.innerHTML = "Auteur(s) : " + auteurs.get(album.idAuteur).nom;
    newSpanSerie.innerHTML = "Série : " + series.get(album.idSerie).nom;
    newSpanNumeros.innerHTML = "N° Album : "+ albums.get(identifiant).numero;
    newSpanPrix.innerHTML = albums.get(identifiant).prix + " €";

    // Détermine les parents de chaque élément créé
    imgBd.appendChild(newImg);
    idTitle.appendChild(newH1);
    idAuthor.appendChild(newSpanAuteur);
    idCollection.appendChild(newSpanSerie);
    idNumber.appendChild(newSpanNumeros);
    idPrice.appendChild(newSpanPrix);
};

var addPanier = document.getElementById("idBtnAddPanier");
var nbrArticlePanier = document.getElementById("nbrArticlePanier");
var nbrArticle = sessionStorage.getItem("NbArticle");
nbrArticlePanier.innerHTML = nbrArticle;

tIdAlbums = [];

// Ajout un évènement sur le bouton "Ajouter au panier"
// Enregistre dans sessionStorage les albums sélectionnés
addPanier.addEventListener("click", () => {
    // Variable dans laquelle on met les key et les values qui sont dans sessionStorage
    let albumSaveInSessionStorage = JSON.parse(sessionStorage.getItem("idAlbums"));
    
    // S'il y a déja un album enregistré dans sessionStorage
    if (albumSaveInSessionStorage) {
        albumSaveInSessionStorage.push(idBd);
        sessionStorage.setItem("idAlbums", JSON.stringify(albumSaveInSessionStorage));
    }
    // S'il n'y a pas d'album enregistré dans sessionStorage
    else {
        albumSaveInSessionStorage = [];
        albumSaveInSessionStorage.push(idBd);
        sessionStorage.setItem("idAlbums", JSON.stringify(albumSaveInSessionStorage));
    }

    // Mise à jour du nombre d'articles et l'affiche
    nbrArticle++;
    sessionStorage.setItem("NbArticle", nbrArticle);
    nbrArticlePanier.innerHTML = nbrArticle;
});