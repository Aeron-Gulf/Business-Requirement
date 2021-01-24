const newUsers = require('../controllers/user.controller');
const upload = require('../middleware/upload');

module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    //Create a new User
    app.post('/signup', upload.single('profileImg'), newUsers.signUp);
    //Get all users
    app.get('/getusers', newUsers.getAll);
}