const initialPlayerData = 
{
    "Yurara" : {
        "name" : "Yurara",
        "attack" : 30,
        "defence": 2,
        "hp" : 100
    },
    "Yuminty" : {
        "name" : "Yuminty",
        "attack" : 500,
        "defence" : 1,
        "hp" : 50
    }
}
var playerData = JSON.parse(JSON.stringify(initialPlayerData));
function show(){
    console.log(initialPlayerData["Yuminty"].hp);
}
function attack(attacker, target){
    var damage = playerData[attacker].attack / playerData[target].defence;
    playerData[target].hp -= damage;
    if (playerData[target].hp < 0){
        playerData[target].hp = 0;
    }
    console.log(attacker + " attacks " + target + "\n" + damage + " Damege to " + target);
    console.log(target + " HP : " + playerData[target].hp + " / " + initialPlayerData[target].hp);
}
function fightTurn(fighter0, fighter1){
    console.log(fighter0 + "'s turn!");
    attack(fighter0, fighter1);
}
function fightPhase(fighter0, fighter1){
    fightTurn(fighter0, fighter1);
    if (playerData[fighter1].hp == 0){
        return;
    }
    fightTurn(fighter1, fighter0);
}
function win(winner){
    console.log(winner + " WIN!");
}
function fight(fighter0, fighter1){
    console.log("Fight!");
    var countPhase = 0;
    while (playerData[fighter0].hp != 0 && playerData[fighter1].hp != 0){
        countPhase ++;
        console.log("Phase " + countPhase);
        fightPhase(fighter0, fighter1);
    }
    switch (0){
        case playerData[fighter0].hp:
            win(fighter1);
            break;
        case playerData[fighter1].hp:
            win(fighter0);
            break;
    }
}
fight("Yurara", "Yuminty");