function play (player, npc){

    if(player === npc){
        console.log("Draw");

    } else {
        if(player === "Piedra" && npc === "Tijera") {
            console.log("Player wins");
        } else if(player === "Papel" && npc === "Piedra") {
            console.log("Player wins");
        } else if(player === "Tijera" && npc === "Papel") {
            console.log("Player wins");
        } else {
            console.log("NPC wins");
        }
    }
};

play("Piedra", "Tijera");
play("Piedra", "Papel");
play("Piedra", "Piedra");
play("Tijera", "Piedra");
play("Tijera", "Tijera");
play("Tijera", "Papel");
play("Papel", "Piedra");
play("Papel", "Tijera");
play("Papel", "Papel");
