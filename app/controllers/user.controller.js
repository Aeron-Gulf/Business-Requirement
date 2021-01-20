const objModels = require('../models');
const User = objModels.user

exports.signUp = (req, res) => {
    if(!req.body.email || !req.body.fullName || !req.body.gender || !req.body.age) {
        return res.status(400).send({
            message: 'user is not be empty field'
        })
    }

    const user = new User({
        email: req.body.email,
        fullName: req.body.fullName,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone
    });

    user.save(err => {
        if (err) {
            return res.status(500).send({ message: err })
        }

        res.send({ message: "User was registered successfully!" })
    })
}