// ------------------------- PROGRAMME PRINCIPAL -------------------------
// Affiche toutes les BDs du répétoire
affichPromo()

// ------------------------- FONCTIONS -------------------------

function ajoutPromo(identifiant, auteur){
    // Récupération de la balise parent
    var liste = document.getElementById("listeIndex");

    // Création des éléments enfants
    var card = document.createElement("div");
    var cardMini = document.createElement("div"); 
    var image = document.createElement("img");
    var cardBody = document.createElement("div");
    var title = document.createElement("p");
    var autor = document.createElement("p");
    var price = document.createElement("p");
    var reduc = document.createElement("p");

    var album = albumsPromo.get(identifiant);
    var nomFic =  series.get(album.idSerie).nom + "-" + 
                  albumsPromo.get(identifiant).numero + "-" + 
                  albumsPromo.get(identifiant).titre;
    nomFic = nomFic.replace((/('|!|\?|\.|"|:|\$)/g), "");

    // Ajout des class pour les div
    card.setAttribute("class", "card");
    cardMini.setAttribute("class", "mini");
    cardBody.setAttribute("class", "card-body");
    title.setAttribute("class", "card-title");
    autor.setAttribute("class", "card-text");
    price.setAttribute("class", "price");
    reduc.setAttribute("class", "reduc");

    // Modifications des images
    image.setAttribute("class", "card-img-top");
    image.src = "images/albumsPromo/" + nomFic + ".jpg";
    image.alt = albumsPromo.get(identifiant).titre;

    // Ajout des titres
    title.innerHTML = albumsPromo.get(identifiant).titre;
    autor.innerHTML = auteurs.get(auteur).nom;
    price.innerHTML = albumsPromo.get(identifiant).prix + "€";
    price.style.textDecoration = "2px red line-through";
    reduc.innerHTML = Math.floor(("-")+(Math.random() * 35) + 10) + "&#37;";
    reduc.style.color = "red";
    // Ajout des p dans la div card-body
    cardBody.appendChild(title);
    cardBody.appendChild(autor);
    cardBody.appendChild(price);
    cardBody.appendChild(reduc);


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
        location.href = "html/detailsBD.html?idBD=" + identifiant;
    });
  
}

/**
 * Affiche les BDs en promotion de l'album contenant toutes les données
 */

function affichPromo() {
    for (var [idAlbum, album] of albumsPromo.entries()) {
        if (album.idAuteur) {
            ajoutPromo(idAlbum, album.idAuteur);
        }
    }
}

