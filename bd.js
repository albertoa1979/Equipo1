import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});
connection.connect();
connection.query('SELECT * FROM table_name', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();