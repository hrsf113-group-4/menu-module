const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const menus = require('../database/database.js')
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "../public")))
app.use("/restaurants/:id",express.static(path.join(__dirname, "../public")))
app.use(cors())
app.get('/menu/:id', (req, res) => {
  menus.findById(req.params.id, (err, menus) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.send(menus)
    }
  })
})
app.listen(3003, () => console.log('listening on port 3003'))