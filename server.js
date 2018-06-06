const express = require('express');
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index.hbs')
})

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});