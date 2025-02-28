const initialPlayerData = 
{
    "Yurara" : {
        "name" : "Yurara",
        "attack" : 10,
        "defence": 5,
        "hp" : 100
    },
    "Yuminty" : {
        "name" : "Yuminty",
        "attack" : 5,
        "defence" : 10,
        "hp" : 50
    }
}
var playerData = initialPlayerData
function attack(attacker, target){
    playerData[target].hp -= playerData[attacker].attack
}
function fight(fighter0, fighter1){
    console.log("fight!")
    attack(fighter0, fighter1)
    console(fighter1 + " hp : " + playerData[fighter1].hp)
}
fight("Yurara", "Yuminty")