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
        "attack" : 5,
        "defence" : 1,
        "hp" : 50
    }
}
var playerData = initialPlayerData;
function show(){
    console.log(initialPlayerData["Yuminty"].hp);
}
show();
function attack(attacker, target){
    var damage = playerData[attacker].attack / playerData[target].defence;
    show();
    playerData[target].hp -= damage;
    show();
    console.log(attacker + " attacks " + target + "\n" + damage + " Damege to " + target);
    show();
    console.log(target + " HP : " + playerData[target].hp + " / " + initialPlayerData[target].hp);
}
function fight(fighter0, fighter1){
    console.log("Fight!");
    attack(fighter0, fighter1);
}
fight("Yurara", "Yuminty");