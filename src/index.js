const express  = require('express')
require('./db/mongoose')
const userrouter = require('./routers/user.js')
const firrouter=require('./routers/fir.js')
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(userrouter)
app.use(firrouter)
app.listen(port,()=>{
    console.log('Server setup in Port ' + port)
})
//3000