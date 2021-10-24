const blueTeamNameRep = nodecg.Replicant('blueTeamName');
const redTeamNameRep = nodecg.Replicant('redTeamName');

const blueScore = nodecg.Replicant('blueScore');
const redScore = nodecg.Replicant('redScore');

const blueTeamForm = document.getElementById('teamNameUpdate');
const blueTeamText = document.getElementById('blueTeam');

const redTeamForm = document.getElementById('teamNameUpdate');
const redTeamText = document.getElementById('redTeam');

const swtichBtn = document.getElementById('switch');
const resetBtn = document.getElementById('reset');

blueTeamNameRep.on('change', value => {
    blueTeamText.value = value;
});

blueTeamForm.addEventListener('submit', e => {
    e.preventDefault();
    blueTeamNameRep.value = blueTeamText.value;
});

redTeamNameRep.on('change', value => {
    redTeamText.value = value;
});

redTeamForm.addEventListener('submit', e => {
    e.preventDefault();
    redTeamNameRep.value = redTeamText.value;
});

function switchTeamNames() {
    temp = redTeamNameRep.value;
    temp2 = redTeamText.value;
    temp3 = redScore.value;

    redScore.value = blueScore.value;
    redTeamNameRep.value = blueTeamText.value;
    redTeamText.value = blueTeamText.value;

    blueTeamNameRep.value = temp;
    blueTeamText.value = temp2;
    blueScore.value = temp3;
};

swtichBtn.addEventListener('click', switchTeamNames);

function resetTeamNames() {
    redTeamNameRep.value = "Red Team";
    blueTeamNameRep.value = "Blue Team";

    redTeamText.value = "Red Team";
    blueTeamText.value = "Blue Team";
};

resetBtn.addEventListener('click', resetTeamNames);