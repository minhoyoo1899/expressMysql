const mysql = require('mysql');

const conn = { //mysql 접속설정
  host: 'localhost',
  port: '8282',
  user: 'root',
  password: 'TheoHernandez19!',
  database: 'INTHEM'
};

const connection = mysql.createConnection(conn); // DB 커넥션
connection.connect(); // DB 접속

const testInsertQuery = "INSERT INTO `INTHEM`.`ACTOR_` (`ACTOR_CODE`, `ACTOR_NAME`, `ACTOR_`) VALUES ('1003', '이정재 ', '꽃미남');"
const testSelectQuery = "SELECT * FROM INTHEM.ACTOR_";

connection.query(testInsertQuery, function (err, result, fieilds) {
  //testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(result);  
});

connection.query(testSelectQuery, function (err, result, fields) { 
  //testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(result);
});

connection.end();