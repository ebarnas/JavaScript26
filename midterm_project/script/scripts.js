// This array will store the games
let games = [];

// When this function is called from the HTML, it will add the game into the array
function addGame() {
    let name = document.getElementById("gameName").value;
    let genre = document.getElementById("genre").value;
    let releasedate = document.getElementById("releaseDate").value;
    let hours = document.getElementById("hours").value;

    let game = {
        name: name,
        genre: genre,
        releasedate: releasedate,
        hours: hours
    };

    games.push(game);

    displayGames();
}


// This will take the games added from the array and then display them into the table in the HTML
function displayGames() {
    let table = document.getElementById("gameTable");

    table.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        let row = "<tr>";

        row += "<td>" + games[i].name + "</td>";
        row += "<td>" + games[i].genre + "</td>";
        row += "<td>" + games[i].releasedate + "</td>";
        row += "<td>" + games[i].hours + "</td>";
        row += "</tr>";

        table.innerHTML += row;
    }
}