const objModels = require('../models');
const User = objModels.user;

exports.signUp = (req, res) => {
    const profile = JSON.parse(req.body.profileInfo);
    if(!profile.email || !profile.fullName || !profile.gender || !profile.age) {
        return res.status(400).send({
            message: 'user is not be empty field'
        });
    };

    const url = req.protocol + '://' + req.get('host');

    const user = new User({
        email: profile.email,
        fullName: profile.fullName,
        gender: profile.gender,
        age: profile.age,
        address: profile.address,
        phone: profile.phone,
        profileImg: url + '/public/' + req.file.filename
    });

    user.save(err => {
        if (err) {
            return res.status(500).send({ message: err });
        };

        res.status(200).send({ message: "User was registered successfully!" });
    });
};

exports.getAll = (req, res) => {
    User.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ message: err }));
};