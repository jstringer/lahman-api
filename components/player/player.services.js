const db = require('../../utilities/db');

const getPlayerByFirstAndLastName = function(nameFirst, nameLast) {
  return db('Baseball.People').select().where({
    'nameFirst': nameFirst,
    'nameLast': nameLast
  });
}

const getPlayerByPartial = function(term) {
  return db('Baseball.People').select('nameFirst', 'nameLast', 'playerID')
    .where(db.raw("CONCAT_WS(' ', \"nameFirst\", \"nameLast\")"), 'ilike', `%${term}%`)
}

const getPlayerById = function(id) {
  return db('Baseball.People').select().where('playerID', id);
}

const getPlayerBattingById = async function(id) {
  const batting = await db('Baseball.Batting').select().where('playerID', id);
  batting.forEach(item => {
    delete item.playerID;
    delete item.id;
    delete item.sting;
  });
  return batting;
}

// Pick either async or promises

const getPlayerFieldingById = async function(id) {
  const fielding = await db('Baseball.Fielding').select().where('playerID', id);
  fielding.forEach(item => {
    delete item.playerID;
    delete item.id;
    delete item.stint;
  });
  return fielding;
}

const getPlayerPitchingById = async function(id) {
  const pitching = await db('Baseball.Pitching').select().where('playerID', id);
  pitching.forEach(item => {
    delete item.playerID;
    delete item.id;
    delete item.stint;
  });
  return pitching;
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial,
  getPlayerById,
  getPlayerBattingById,
  getPlayerFieldingById,
  getPlayerPitchingById
}