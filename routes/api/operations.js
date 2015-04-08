var mysql = require('mysql');

var db_config = require('./../../configuration/credentials.js');
var client = require('../client.js')
var pool = mysql.createPool(db_config.cred.localhost);

exports.retrieve_operations = function(request, response){
  client.replaceClientOnDisconnect(pool);
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query('SELECT E.Name AS name, O.Finance AS finance, O.Amount AS amount, O.Year AS year FROM Operations O JOIN Entities E ON (E.ID = O.EntityID)', function(err, rows){
      if (err) throw err;
      connection.release();
      response.json(rows);
    });
  });
};

exports.retrieve_revenue_year = function(request, response){
  client.replaceClientOnDisconnect(pool);
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query('SELECT E.Name AS name, O.Finance AS finance, O.Amount AS amount, O.Year AS year FROM Operations O JOIN Entities E ON (E.ID = O.EntityID) WHERE O.Finance = ? AND O.Year = ?', ["Revenue", request.params.year], function(err, rows){
      if (err) throw err;
      connection.release();
      response.json(rows);
    });
  });
};

exports.retrieve_expenses_year = function(request, response){
  client.replaceClientOnDisconnect(pool);
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query('SELECT E.Name AS name, O.Finance AS finance, O.Amount AS amount, O.Year AS year FROM Operations O JOIN Entities E ON (E.ID = O.EntityID) WHERE O.Finance = ? AND O.Year = ?', ["Expenses", request.params.year], function(err, rows){
      if (err) throw err;
      connection.release();
      response.json(rows);
    });
  });
};