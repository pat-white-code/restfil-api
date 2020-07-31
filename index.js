const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080;

// ROUTER IMPORTS GO HERE
const usersRouter = require('./api/routes/users');

app.use(bodyParser.json());

app.get('/test', (req, res)=> {
  res.send('BAZINGA!')
})

// ROUTERS MOUNTED HERE
app.use('/api/users', usersRouter);


app.listen(port, ()=> {
  console.log(`Listening on ${port}!`)
});











