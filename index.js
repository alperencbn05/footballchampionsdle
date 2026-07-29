
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
let quatos = [3, 3, 3, 2];
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
                alert("bu takımdan oyuncu veremezsin.");
                return;

            }



            if (getPlayerCountFromTeam(team) >= quatos[currentTeamIndex]) {
                alert("you can max 3 selected this team");
                return;

            }


            if (countMyTeamPlayers() >= myTeamList.slots.length) {
                alert("Team is full");
                return;

            }
            addPlayerToSquad(team.players[i])
            if (getPlayerCountFromTeam(team) >= quatos[currentTeamIndex]) {
                currentTeamIndex++;
                renderTeams();
            }
            renderMyTeam();

        });
        playerCard.className = "player-card";
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
    return total / countMyTeamPlayers(team)
}


function getMyAveragePower(myTeamList) {
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
        document.getElementById("team-area").textContent = "Your team is ready";
        return;
    }


    document.getElementById("team-area").textContent = "";
    document.getElementById("team-area").appendChild(createTeamCard(selectedTeams[currentTeamIndex]))

}


function renderMyTeam() {

    document.getElementById("myTeam").textContent = "";


    for (let i = 0; i < myTeamList.slots.length; i++) {
        let slot = myTeamList.slots[i];
        let playerCard = document.createElement("div");
        playerCard.className = "myplayer-card";
        playerCard.textContent = slot.position + ": ";
        if (slot.player !== null) {
            playerCard.textContent += slot.player.name + " " + slot.player.power;
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
}


function addPlayerToSquad(player) {
    let foundSlot = myTeamList.slots.find(slot => slot.player === null && slot.position === player.position);
    if (foundSlot === undefined) {
        foundSlot = myTeamList.slots.find(slot => slot.player === null);
    }
    foundSlot.player = player;
}


renderTeams();
renderMyTeam();





document.getElementById("start-game").addEventListener("click", () => {
    if ((countMyTeamPlayers()) !== myTeamList.slots.length) {
        alert("Your team should have 11 players")
        return;


    }

    let luck = (Math.random() * 20) - 10;
    let userPower = Math.floor(getMyAveragePower(myTeamList));
    let opponentPower = Math.floor(getAveragePower(opponent));
    let matchResult;

    if ((userPower + luck) > opponentPower) {

        matchResult = "won";
    }
    else {
        matchResult = "lost";
    }
    document.getElementById("result").textContent = matchResult + " " + "your opponent: " + opponent.teamName + " " + userPower + "-" + opponentPower;
}
)








