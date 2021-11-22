const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const routes = require('./routes/index');
require('./database/mysql')

const port = 5000;

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json())

routes(app)

app.listen(port, () => {
    console.log("connected to server")
})