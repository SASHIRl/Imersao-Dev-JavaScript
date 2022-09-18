/*var listaFilmes = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvVzDdQN_6rzFJs9dNEVMKpKBrB8dmpf4hvF9X54q6prXMo6_", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTAHZCr7BidDhYPzYpb_CeEFg5zRYmTzz7B2DkIHa7qtCJxA2f", "https://d135u4jtzauizi.cloudfront.net/A24_MEN_Digital_KeyArt.jpg"];

for(var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}*/

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    } else {
        console.error("Endereço de filme inválido")
    }
    document.getElementById("filme").value = " ";
}