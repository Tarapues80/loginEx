const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// Get the client
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bcrypt');
const login = require('./login');
const resgistro = require('./registro');
const { obtenerUsuarios, eliminarUsuarios } = require('./usuarios');
const validar = require('./validar');
const saltRounds = 10;
mysql://root:gaZPlRAiOjktwpAafpJgBjVdjiKEvVBA@junction.proxy.rlwy.net:48800/railway

app.use(cors({
  origin: process.env.URLFRONTEND || 'http://localhost:5173',
  credentials: true
}))
app.use(session({
  secret: process.env.SECRETSESSION || '19v0weffwhbuifeifnfewfwefwWGEGRER5R8E4GEGREtrhs',
  proxy: process.env.NODE_ENV === 'production',
  cookie:{
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'none'
  }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', login)

app.get('/validar', validar)

app.get('/registro', resgistro)

app.get('/usuarios', obtenerUsuarios)

app.delete('/usuarios', eliminarUsuarios)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})