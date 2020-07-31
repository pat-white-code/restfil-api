const mysql = require('mysql');
require('dotenv').config();

class Connection {
  constructor(){
  if(!this.pool) {
    console.log('creating conneciton...')
    this.pool = mysql.createPool({
      connectionLimit: 100,
      host: 'den1.mysql6.gear.host',
      user: process.env.CONNECTION_USERNAME,
      password: process.env.CONNECTION_PASSWORD,
      database: 'restfulapi'
      })
    return this.pool;
    }
  return this.pool
  } 
}

const instance = new Connection()

module.exports = instance;