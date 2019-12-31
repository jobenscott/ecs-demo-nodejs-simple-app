const express = require('express')

const PORT = process.env.PORT || 80

const app = express()

app.get('/', (req, res) => res.status(200).json({status: 'ok'}))

// app.get('/home', (request, response) => {
//   return response.json('well, did it work?')
// })

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
