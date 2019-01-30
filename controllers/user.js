const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.registerUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const user = await User.create({
            login: req.body.login,
            email: req.body.email,
            password: hashedPassword
        });
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
    }
};

exports.getQueryString = async (req, res, next) => {
    try {
        // localhost:5000/api/auth/params?pierwsze=100&drugie=dwa
        console.log(req.query, req.query.pierwsze, req.query.drugie);
        const queryString = req.query;
        res.status(200).send(queryString);
    } catch (err) {
        res.status(500).send({message: "Erroron the server", err});
    }
}