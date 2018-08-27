var Sequelize = require("sequelize");


var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "password",
        database: "friendfinder"
    },

    jawsDB: {
        port: 3306,
        host: 'i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'lgjw8icdqhfpxwh4',
        password: "g2eo8ok20dxqgupi",
        database: "av4qixl14ognna1e" 
    }
}

var selectedSource = source.jawsDB;

var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',
  define: { timestamps: false },

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;