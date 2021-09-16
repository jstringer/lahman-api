const { Router } = require('express');
const controllers = require('./team.controllers');

const router = Router();

// api/player/
router
  .route('/')
  .get(controllers.getTeamByName);

// api/player/match
router
  .route('/match')
  .get(controllers.getTeamByMatch)

module.exports = router;