const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Hello All')
})

const server = app.listen('3000', (err) => {
	console.log('Server is running on port', server.address().port)	
})