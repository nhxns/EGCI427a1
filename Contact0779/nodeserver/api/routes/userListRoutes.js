'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:userId')
        .get(userList.readAUser)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)

    app.route('/create')
        .post(userList.createALoginUser)

    app.route('/login')
        .post(userList.Login)
}