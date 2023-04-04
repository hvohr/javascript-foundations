function createPlayer(name, age, moveset) {
    var player = {
        name: name,
        age: age,
        moveset: moveset

    }
    return player;
}

function createLevel(name, players) {
    var level = {
        name: name,
        players: players,
        coins: 0,
        lives: 3
    }
    return level
}

function findCoins(level, newCoins) {
    level.coins += newCoins;
    if (newCoins === 100) {
        level.lives += 1;
    }
    return level;
}

function defeatPlayer(level) {
    level.lives--
    if (level.lives === 0) {
     return 'GAME OVER';
    }
    return level;
}



module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
};