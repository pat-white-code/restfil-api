const pool = require('../../mysql/connection');

const getAllUsers = (req, res) => {
  let sql = 'SELECT * from users;';

  pool.query(sql, (err, rows)=>{
    if(err) { return res.status(500).send(err)}
    res.json(rows)
  })
}

module.exports = getAllUsers;