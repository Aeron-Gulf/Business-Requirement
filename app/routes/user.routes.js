const newUsers = require('../controllers/user.controller')

module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    //Create a new User
    app.post('/signup', newUsers.signUp);
}