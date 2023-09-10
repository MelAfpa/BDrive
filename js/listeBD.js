// ------------------------- PROGRAMME PRINCIPAL -------------------------
// Afficher toutes les BDs du répertoire
affichBD();



// ------------------------- FONCTIONS -------------------------

/** Créer les BDs dynamiquement dans le fichier HTML
 * 
 * @param {number} identifiant de la BD
 */
function ajoutBD(identifiant) {
    // Récupération de la balise parent
    var liste = document.getElementById("liste");

    // Création des éléments enfants
    var card = document.createElement("div");
    var cardMini = document.createElement("div"); 
    var image = document.createElement("img");
    var cardBody = document.createElement("div");
    var title = document.createElement("p");
    var autor = document.createElement("p");
    var price = document.createElement("p");

    var album = albums.get(identifiant);
    var nomFic =  series.get(album.idSerie).nom + "-" + 
                    albums.get(identifiant).numero + "-" + 
                    albums.get(identifiant).titre;
    nomFic = nomFic.replace((/('|!|\?|\.|"|:|\$)/g), "");

    // Ajout des class pour les div
    card.setAttribute("class", "card");
    cardMini.setAttribute("class", "mini");
    cardBody.setAttribute("class", "card-body");
    title.setAttribute("class", "card-title");
    autor.setAttribute("class", "card-text");
    price.setAttribute("class", "price");


    // Modifications des images
    image.setAttribute("class", "card-img-top");
    image.src = "../images/albumsMini/" + nomFic + ".jpg";
    image.alt = albums.get(identifiant).titre;

    // Ajout des titres
    title.innerHTML = albums.get(identifiant).titre;
    autor.innerHTML = auteurs.get(album.idAuteur).nom;
    price.innerHTML = albums.get(identifiant).prix + "€";


    // Ajout des p dans la div card-body
    cardBody.appendChild(title);
    cardBody.appendChild(autor);
    cardBody.appendChild(price);

    // Ajouts des miniatures dans la div card
    cardMini.appendChild(image);

    // Ajout de mini et cardBody dans le parent card
    card.appendChild(cardMini);
    card.appendChild(cardBody);
    

    // Ajout de la card dans la liste
    liste.appendChild(card);

    // MAJ du curseur
    card.setAttribute("style","cursor:pointer;");

    // Abonnement de la carte
    card.addEventListener("click", () =>{
        location.href = "detailsBD.html?idBD=" + identifiant;
    });
  
}

/** Afficher toutes les BDs du répertoire
 * 
 */
function affichBD() {
    for (var [idAlbum, album] of albums.entries()) {
        if (album.idAuteur) {
            ajoutBD(idAlbum);
        }
    }
}