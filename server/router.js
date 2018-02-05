const express = require('express');
const user = require('./controller/user');
const userApi = require('./controller/user_api');

module.exports = function(app) {
    var router = express.Router()
    
    router.get('/user/getuser/userid/:_id', user.findUser)
    router.post('/user/createuser', user.createUser)
    router.put('/user/updateuser/userid/:_id', user.updateUser)
    router.post('/user/login', userApi.login);
    router.post('/user/logout', userApi.logout);
    router.get('/user/checkAuthenticate', userApi.checkAuthenticate);
    router.get('/user/profile', userApi.authenticate, userApi.profile);

    app.use('/api', router)
}