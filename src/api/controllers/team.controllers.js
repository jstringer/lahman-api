const teamServices = require('../services/team.services');

const getTeamByName = async (req, res) => {
  try {
    const team = await teamServices.getTeamByName(req.body.name);
    res.status(200).json(team);
  }
  catch(error) {
    console.log(error);
    res.status(400).end();
  }
}

const getTeamByMatch = async (req, res) => {
  try {
    const team = await teamServices.getTeamByMatch(req.body.term);
    res.status(200).json(team);
  }

  catch(error) {
    console.log(error);
    res.status(400).end();
  }
}

module.exports = {
  getTeamByName,
  getTeamByMatch
}