const blueScore = nodecg.Replicant('blueScore');
const redScore = nodecg.Replicant('redScore');
const bestOf = nodecg.Replicant('bestOf');

const blueWinBtn = document.getElementById('blueWin');
const redWinBtn = document.getElementById('redWin');

const resetBtn = document.getElementById('reset');

const bof = document.getElementById('bof');
const bot = document.getElementById('bot');
const boo = document.getElementById('boo');
const bon = document.getElementById('bon');

function incrementBlue() {
    blueScore.value++;
};

function incrementRed() {
    redScore.value++;
};

function resetScores() {
    blueScore.value = 0;
    redScore.value = 0;
};

blueWinBtn.addEventListener('click', incrementBlue);
redWinBtn.addEventListener('click', incrementRed);
resetBtn.addEventListener('click', resetScores);

function setBoF() {
    bestOf.value = 5;
};

function setBoT() {
    bestOf.value = 3;
};

function setBoO() {
    bestOf.value = 1;
};

function setBoN() {
    bestOf.value = -1;
}

bof.addEventListener('click', setBoF);
bot.addEventListener('click', setBoT);
boo.addEventListener('click', setBoO);
bon.addEventListener('click', setBoN);