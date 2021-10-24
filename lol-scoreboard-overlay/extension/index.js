'use strict';

module.exports = function (nodecg) {
    nodecg.Replicant('redScore', {defaultValue: 0});
    nodecg.Replicant('blueScore', {defaultValue: 0});

    nodecg.Replicant('blueTeamName', {defaultValue: 'Blue Team'});
    nodecg.Replicant('redTeamName', {defaultValue: 'Red Team'});

    nodecg.Replicant('bestOf', {defaultValue: 5});
};
