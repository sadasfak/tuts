const path = require("path");
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '.../public');

app.use(express.static(publicDirectoryPath));


app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render(index.hbs, {
            title: "Home",
            name: "portfolio"

  });
})

app.get('/Home', function (req, res) {
    res.send('HI This is HOme Hucth');
  })
 
app.listen(3000,() =>{
console.log("The server is running");


})