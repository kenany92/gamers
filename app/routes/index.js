const playersRoutes = require('./players_routes');

module.exports = function(app, db){

    playersRoutes(app, db);
}