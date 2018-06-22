const express = require('express')
const FuturamaCharacters = require('./futurama_characters')

const app = express()
const cors = require('cors')

const port = 8000

app.use(cors())
app.use('/images', express.static('src/api/images'))


app.listen(port, () => {
  console.log('We are live on ' + port)
  app.get('/characters', (req, res) => {
    FuturamaCharacters.getCharacters().then(response => res.send(response))
  })
})
