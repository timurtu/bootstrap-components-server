/**
 * Created by timur on 2/12/17.
 */

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {

  const options = {
    root: __dirname + '/build/'
  }

  res.sendFile('index.html', options, function(err) {
    if(err) {
      console.error(err)
    } else {
      console.log('Sent index')
    }
  })
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
