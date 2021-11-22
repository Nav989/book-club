
const service = require('./service')


module.exports = function (app){

app.post('/user/signup', service.register)

app.post('/user/signin', service.login)

}