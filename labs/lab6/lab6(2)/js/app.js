let player = {
    attack: 50,
    hitpoints: 100,
    defense: 10
}
console.log(player)

let enemy = {
    attack: 30,
    hitpoints: 150,
    defense: 15
}
console.log(enemy)

let charStats = document.getElementsByClassName("charStats")
    charStats[0].innerHTML = "<p>Player Stats</p>" + "<b>Attack: </b>" + player.attack + "<br />" + "<b>Hitpoints: </b>" + player.hitpoints + "<br />" + "<b>Defense: </b>" + player.defense

    charStats[1].innerHTML = "<p>Enemy Stats</p>" + "<b>Attack: </b>" + enemy.attack + "<br />" + "<b>Hitpoints: </b>" + enemy.hitpoints + "<br />" + "<b>Defense: </b>" + enemy.defense


function attack() {
    //variables for damage calculation
    let plAttack = player.attack - enemy.defense
    let enAttack = enemy.attack - player.defense

    //player attacks enemy
    enemy.hitpoints = enemy.hitpoints - plAttack
    console.log(enemy)

    //enemy attacks player
    player.hitpoints = player.hitpoints - enAttack
    console.log(player)

    //Makes sure that hitpoints don't go negative, once hp goes below or equals 0 it is then 0
    if(player.hitpoints <= 0) {
        player.hitpoints = 0
    }
    if(enemy.hitpoints <= 0) {
        enemy.hitpoints = 0
    }
}

//Updates both stat cards after an attack; need to find a way to shorten this
function update() {
    charStats[0].innerHTML = "<p>Player Stats</p>" + "<b>Attack: </b>" + player.attack + "<br />" + "<b>Hitpoints: </b>" + player.hitpoints + "<br />" + "<b>Defense: </b>" + player.defense

    charStats[1].innerHTML = "<p>Enemy Stats</p>" + "<b>Attack: </b>" + enemy.attack + "<br />" + "<b>Hitpoints: </b>" + enemy.hitpoints + "<br />" + "<b>Defense: </b>" + enemy.defense
}