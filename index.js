
let formation = ["gk", "lb", "cb", "cb", "rb", "lm", "cm", "cm", "rm", "st", "st"]


let myTeamList = {

    teamName: "MyTeam",


    slots: []
};

for (let i = 0; i < formation.length; i++) {
    myTeamList.slots.push({ position: formation[i], player: null })
}
console.log(myTeamList)


let currentTeamIndex = 0;
let quotas = [3, 3, 3, 2];
let teams = [team1, team2, team3, team4, team5, team6];
let punishment = 10;



let selectedTeams = [];

while (selectedTeams.length < 4) {
    let randomIndex = Math.floor(Math.random() * teams.length);
    if (!selectedTeams.includes(teams[randomIndex])) {
        selectedTeams.push(teams[randomIndex])
    }
}


let possibleOpponents = [];

for (let i = 0; i < teams.length; i++) {
    if (!selectedTeams.includes(teams[i])) {
        possibleOpponents.push(teams[i]);
    }
}

let opponent = possibleOpponents[Math.floor(Math.random() * possibleOpponents.length)];


function createTeamCard(team) {



    let teamCard = document.createElement("div");
    teamCard.className = "team-card";


    let teamNameCard = document.createElement("div");
    teamNameCard.className = "teamname-card";
    teamNameCard.textContent = team.teamName;
    teamCard.appendChild(teamNameCard);


    for (let i = 0; i < team.players.length; i++) {
        let playerCard = document.createElement("div");
        playerCard.textContent = team.players[i].name + " " + team.players[i].position + " " + team.players[i].power;
        playerCard.addEventListener("click", () => {

            if (isPlayerInSquad(team.players[i]) && (team === selectedTeams[currentTeamIndex])) {
                removePlayerFromSquad(team.players[i]);
                renderMyTeam();
                return;
            }

            if (isPlayerInSquad(team.players[i])) {
                alert("bu takımdan oyuncu veremezsiniz.");
                return;

            }



            if (getPlayerCountFromTeam(team) >= quotas[currentTeamIndex]) {
                alert("Bu takımdan maximum sayıda oyuncu seçtiniz." + quotas[currentTeamIndex]);
                return;

            }


            if (countMyTeamPlayers() >= myTeamList.slots.length) {
                alert("Kadro Dolu.");
                return;

            }
            addPlayerToSquad(team.players[i])


        });
        if (isPlayerInSquad(team.players[i])) {
            playerCard.className = "player-card picked";
        } else {
            playerCard.className = "player-card";
        }
        teamCard.appendChild(playerCard);
    }
    return teamCard;
}



function getAveragePower(team) {

    if (team.players.length == 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < team.players.length; i++) {
        total += team.players[i].power;

    }
    return total / team.players.length
}


function getMyAveragePower() {
    if (myTeamList.slots.length == 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < myTeamList.slots.length; i++) {
        let player = myTeamList.slots[i].player;


        if (player !== null) {
            total += player.power;

            if (player.position !== myTeamList.slots[i].position) {
                total -= punishment;
            }

        }



    }
    return total / countMyTeamPlayers(myTeamList)
}


function getPlayerCountFromTeam(team) {


    let counter = 0;

    for (let i = 0; i < team.players.length; i++) {

        if (isPlayerInSquad(team.players[i])) {
            counter++;
        }
    }
    return counter;



}









function renderTeams() {

    if (currentTeamIndex >= selectedTeams.length) {
        document.getElementById("team-area").textContent = "Takımınız Hazır.";
        return;
    }


    document.getElementById("team-area").textContent = "";
    document.getElementById("team-area").appendChild(createTeamCard(selectedTeams[currentTeamIndex]))


    let nextTeam = document.createElement("button");
    nextTeam.className = "next-team"
    nextTeam.textContent = "Sıradaki takım"
    document.getElementById("team-area").appendChild(nextTeam)

    if(currentTeamIndex == selectedTeams.length -1) {
            nextTeam.textContent = "Bitir";
        }



    nextTeam.addEventListener("click", () => {
        if (getPlayerCountFromTeam(selectedTeams[currentTeamIndex]) < quotas[currentTeamIndex]) {
            alert("Önce bu takımdan " + quotas[currentTeamIndex] + " oyuncu seçmelisin");
            return;
        }

        
        currentTeamIndex++;
        renderTeams();
    });


}


function renderMyTeam() {



    document.getElementById("myTeam").textContent = "";


    let myteamNameCard = document.createElement("div");
    myteamNameCard.className = "myteamname-card";
    myteamNameCard.textContent = myTeamList.teamName;
    document.getElementById("myTeam").appendChild(myteamNameCard);






    for (let i = 0; i < myTeamList.slots.length; i++) {
        let player = myTeamList.slots[i].player;
        let slot = myTeamList.slots[i];
        let playerCard = document.createElement("div");
        playerCard.className = "myplayer-card";
        playerCard.textContent = slot.position + ": ";
        if (slot.player === null) {
            playerCard.className = "myplayer-card empty"
        } else {
            if (player.position !== slot.position) {
                playerCard.className = "myplayer-card misplaced"
            }
            if (slot.player !== null) {
                playerCard.textContent += slot.player.name + " " + slot.player.power;
            }
        }
        document.getElementById("myTeam").appendChild(playerCard)
    }
}






function isPlayerInSquad(player) {
    return myTeamList.slots.some(slot => slot.player === player);

}

function countMyTeamPlayers() {
    return myTeamList.slots.filter(slot => slot.player !== null).length;
}


function removePlayerFromSquad(player) {
    let foundSlot = myTeamList.slots.find(slot => slot.player === player);
    foundSlot.player = null;
    renderTeams();
    renderMyTeam();
}


function addPlayerToSquad(player) {
    let foundSlot = myTeamList.slots.find(slot => slot.player === null && slot.position === player.position);
    if (foundSlot === undefined) {
        foundSlot = myTeamList.slots.find(slot => slot.player === null);
    }
    foundSlot.player = player;
    renderTeams();
    renderMyTeam();
}


renderTeams();
renderMyTeam();





document.getElementById("start-game").addEventListener("click", () => {


    if ((countMyTeamPlayers(myTeamList)) !== myTeamList.slots.length) {
        alert("Takımınız 11 kişi olmalı")
        return;


    }


    document.getElementById("result").textContent = "Rakibin : " + opponent.teamName


    setTimeout(() => {
        let userPower = Math.floor(getMyAveragePower());
        let opponentPower = Math.floor(getAveragePower(opponent));
        let matchResult;
        let rate = 20;
        let userGoals = Math.floor(Math.random() * (userPower / rate))
        let opponentGoals = Math.floor(Math.random() * (opponentPower / rate))
        if (userGoals > opponentGoals) {

            matchResult = "Kazandın";
        }
        else if (userGoals < opponentGoals) {
            matchResult = "Kaybettin";
        }
        else {
            matchResult = "Berabere";
        }
        document.getElementById("result").textContent = matchResult + " " + userGoals + "-" + opponentGoals
    }

        , 3000)










}
)









