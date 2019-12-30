const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/status', (req, res) => res.status(200).json({status: 'ok'}))

app.get('/', (request, response) => {
  return response.json('well, did it work?')
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
