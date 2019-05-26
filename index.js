const express = require('express')
const multer = require('multer')
const cors = require('cors')
const upload = multer({dest: 'uploads/'})

const app = express()

app.options('/upload', cors())
app.post('/upload', cors(), upload.single('avatar'), (req, res) => {
  res.send(req.file.filename)
})

app.get('/preview/:key', cors(),(req, res) => {
  res.sendFile(`uploads/${req.params.key}`, {
    root: __dirname,
    header: {
      "Content-Type": 'image/*'
    }
  }, (err) => {
    console.log(err)
  })
})


var port = process.env.PORT || 3000
app.listen(port)