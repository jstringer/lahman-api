const db = require('../../../utilities/db');

const getTeamByName = function(name) {
    return db('Baseball.Teams').select().where('name', name);
}

const getTeamByMatch = function(term) {
    return db('Baseball.Teams').select('name')
        .where('name', 'like', `%${term}%`);
}

module.exports = {
    getTeamByMatch,
    getTeamByName
}