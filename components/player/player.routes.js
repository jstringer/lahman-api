const { Router } = require('express');
const controllers = require('./player.controllers');

const router = Router();

// api/player/
router
  .route('/')
  .get(controllers.getPlayerByName);

// api/player/match
  router
    .route('/match')
    .get(controllers.getPlayerByMatch);

// api/player/:playerId
router
  .route('/:playerId')
  .get(controllers.getPlayerStatsById);

module.exports = router;