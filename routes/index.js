module.exports = function (app){

    require('../modules/user/index')(app)
    require('../modules/author/index')(app)
}