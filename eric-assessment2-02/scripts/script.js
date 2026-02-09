const game1 = {
    name: "Counter-Strike 2",
    genre: "Competitive First-Person Shooter",
    img: "images/counterstrike.png",
    description: 'Counter-Strike 2 is a Competitive First-Person shooter.' +
    'It is a 5-vs-5 game. 5 Counter-Terrorists and 5 Terrorists.' +
    'The 5 Counter-Terrorists have to defend two bombsites, Alpha and Bravo.' +
    'They win rounds by either killing all 5 Terrorists, or defusing the bomb.' +
    'Terrorists have to win by either killing all 5 Counter-Terrorists or by letting the bomb explode.' +
    'The first time to reach 13, will win the game. But there is overtime if both teams have 12 rounds.'    
};

const game2 = {
    name: "Mount & Blade II: Bannerlord",
    genre: "Open-World Medieval Strategy",
    img: "images/bannerlord.jpg",
    description: 'Mount & Blade II: Bannerlord is a Strategy Medieval game.' +
    'You start with nothing but your starting gear and 1000 coins.' +
    'You have to slowly recruit warriors to your party and start to make a name for yourself.' +
    'You can earn renown by competing and winning in tournaments or by fighting battles.' + 
    'You go until you die or if you have conquered the entire world.'
}

const game3 = {
    name: "The Witcher 3: Wild Hunt",
    genre: "Single-Player Story",
    img: "images/witcher.jpg",
    description: 'The Witcher 3: Wild Hunt is a Single-Player Rich Story game.' +
    'You follow along as Geralt of Rivia and sometimes get to play as Ciri.' +
    'It is the third installment of the Witcher games. This one is the best.' +
    'You get to help in the war with the North and Nilfgard, and do Witcher Contracts, which are hunting down creatures.'
}

const game4 = {
    name: "Total War: Warhammer III",
    genre: "Strategy",
    img: "images/warhammer.jpg",
    description: 'Total War: Warhammer III is a Strategy game.' +
    'You get to choose from many different factions, then choose a Legendary Lore.' +
    'You follow along with the mission objectives in order to save your faction and rise in the great success.' +
    'You can be evil or good.'
}

const game5 = {
    name: "Vampire Survivors",
    genre: "Roguelite",
    img: "images/vampire.jpg",
    description: 'Vampire Survivors is a Roguelite game.' +
    'A very simple game of choosing your hero and just survive for 30 minutes or less.' +
    'Vampire Survivors has a very complex story of a bunch of random things happening.' +
    'As well there are a lot of secrets to unfold.'
}

function display(){
    let html = `<h2>${game1.name}</h2>` +
    `<h3>${game1.genre}</h3>` + `<img src = ${game1.img}>` +
    `<h3>Description of the Game</h3>` +
    `<p>${game1.description}</p>`;
    document.getElementById("ob1").innerHTML = html;

    let html2 = `<h2>${game2.name}</h2>` +
    `<h3>${game2.genre}</h3>` + `<img src = ${game2.img}>` +
    `<h3>Description of the Game</h3>` +
    `<p>${game2.description}</p>`;
    document.getElementById("ob2").innerHTML = html2;

    let html3 = `<h2>${game3.name}</h2>` +
    `<h3>${game3.genre}</h3>` + `<img src = ${game3.img}>` +
    `<h3>Description of the Game</h3>` +
    `<p>${game3.description}</p>`;
    document.getElementById("ob3").innerHTML = html3;

    let html4 = `<h2>${game4.name}</h2>` +
    `<h3>${game4.genre}</h3>` + `<img src = ${game4.img}>` +
    `<h3>Description of the Game</h3>` +
    `<p>${game4.description}</p>`;
    document.getElementById("ob4").innerHTML = html4;

    let html5 = `<h2>${game5.name}</h2>` +
    `<h3>${game5.genre}</h3>` + `<img src = ${game5.img}>` +
    `<h3>Description of the Game</h3>` +
    `<p>${game5.description}</p>`;
    document.getElementById("ob5").innerHTML = html5;
}