// 1. Add sportId to teams table
//      - npx sequelize migration:generate --name add-sportId-to-team
// 2. Add currentTeamId to players table
//      - npx sequelize migration:generate --name add-currentTeamId-to-players
// 3. Add playerId to draft picks table
// 4. Add fanId to draft picks table
// - npx sequelize model:generate --name DraftPick --attributes fanId:integer,playerId:integer
