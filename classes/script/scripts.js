class Game {
    constructor(name, genre, releasedate, achievements) {
        this.name = name;
        this.genre = genre;
        this.releasedate = releasedate;
        this.achievements = achievements;
    }

    gameName() {
        return `This game is called ${this.name}.`;
    }

    gameGenre() {
        return `This game's genre is ${this.genre}.`;
    }

    gameReleasedate() {
        return `This game came out ${this.releasedate}.`;
    }

    gameAchievements() {
        return `This has ${this.achievements} available to unlock.`;
    }
}

const witcher = new Game('Witcher 3: The Wild Hunt', 'Single-Player RPG', 'May 18 2015', 78);

document.getElementById("name").innerHTML = witcher.gameName();
document.getElementById("genre").innerHTML = witcher.gameGenre();
document.getElementById("releasedate").innerHTML = witcher.gameReleasedate();
document.getElementById("achievements").innerHTML = witcher.gameAchievements();