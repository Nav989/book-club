
let  service = require('./service')

module.exports=function(app){
app.post('/author/signup', service.register)

app.post('/author/signin', service.login)

}