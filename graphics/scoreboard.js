const blueScoreReplicant = nodecg.Replicant('blueScore');
const redScoreReplicant = nodecg.Replicant('redScore');
const bestOfReplicant = nodecg.Replicant('bestOf');

bo1 = document.getElementById('bo1');
bo3 = document.getElementById('bo3');
bo5 = document.getElementById('bo5');

blueDot1 = document.getElementById('blueDot1'); 
blueDot2 = document.getElementById('blueDot2');
blueDot3 = document.getElementById('blueDot3');
blueDot4 = document.getElementById('blueDot4');
blueDot5 = document.getElementById('blueDot5');
blueDot6 = document.getElementById('blueDot6');

redDot1 = document.getElementById('redDot1');
redDot2 = document.getElementById('redDot2');
redDot3 = document.getElementById('redDot3');
redDot4 = document.getElementById('redDot4');
redDot5 = document.getElementById('redDot5');
redDot6 = document.getElementById('redDot6');

const blueTeamNameRep = nodecg.Replicant('blueTeamName');
const redTeamNameRep = nodecg.Replicant('redTeamName');

blueTeamNameRep.on('change', (value) => {
    document.getElementById('blueTeam').innerHTML = value;
});

redTeamNameRep.on('change', (value) => {
    document.getElementById('redTeam').innerHTML = value;
});

redScoreReplicant.on("change", (newVal) => {
    if (newVal == 1)
    {
        redDot1.style.color = "#c7353d";
        redDot4.style.color = "#c7353d";
        redDot6.style.color = "#c7353d";
    }
    
    if (newVal == 2)
    {
        redDot1.style.color = "#c7353d";
        redDot2.style.color = "#c7353d";
        redDot4.style.color = "#c7353d";
        redDot5.style.color = "#c7353d";
        redDot6.style.color = "#c7353d";
    }

    if (newVal == 3)
    {
        redDot1.style.color = "#c7353d";
        redDot2.style.color = "#c7353d";
        redDot3.style.color = "#c7353d";
        redDot4.style.color = "#c7353d";
        redDot5.style.color = "#c7353d";
        redDot6.style.color = "#c7353d";
    }

    if (newVal == 0)
    {
        redDot1.style.color = "#c4c4c4";
        redDot2.style.color = "#c4c4c4";
        redDot3.style.color = "#c4c4c4";
        redDot4.style.color = "#c4c4c4";
        redDot5.style.color = "#c4c4c4";
        redDot6.style.color = "#c4c4c4";
    }
});

blueScoreReplicant.on("change", (newVal) => {
    if (newVal == 1)
    {
        blueDot1.style.color = "#37a8e0";
        blueDot4.style.color = "#37a8e0";
        blueDot6.style.color = "#37a8e0";
    }
    
    if (newVal == 2)
    {
        blueDot1.style.color = "#37a8e0";
        blueDot2.style.color = "#37a8e0";
        blueDot4.style.color = "#37a8e0";
        blueDot5.style.color = "#37a8e0";
        blueDot6.style.color = "#37a8e0";
    }

    if (newVal == 3)
    {
        blueDot1.style.color = "#37a8e0";
        blueDot2.style.color = "#37a8e0";
        blueDot3.style.color = "#37a8e0";
        blueDot4.style.color = "#37a8e0";
        blueDot5.style.color = "#37a8e0";
        blueDot6.style.color = "#37a8e0";
    }

    if (newVal == 0)
    {
        blueDot1.style.color = "#c4c4c4";
        blueDot2.style.color = "#c4c4c4";
        blueDot3.style.color = "#c4c4c4";
        blueDot4.style.color = "#c4c4c4";
        blueDot5.style.color = "#c4c4c4";
        blueDot6.style.color = "#c4c4c4";
    }
});

bestOfReplicant.on("change", (newVal) => {
    if (newVal == -1)
    {
        bo1.style.display = "none";
        bo3.style.display = "none";
        bo5.style.display = "none";
    }
    
    if (newVal == 1)
    {
        bo1.style.display = "flex";
        bo3.style.display = "none";
        bo5.style.display = "none";
    }

    if (newVal == 3)
    {
        bo1.style.display = "none";
        bo3.style.display = "flex";
        bo5.style.display = "none";        
    }

    if (newVal == 5)
    {
        bo1.style.display = "none";
        bo3.style.display = "none";
        bo5.style.display = "flex";        
    }
});