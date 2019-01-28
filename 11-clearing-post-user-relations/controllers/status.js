const User = require('../models/user'); 

exports.getStatus = async (req, res, next) => {
    try {
    const user = await User.findById(req.userId)
            res.status(200).send({ status: user.status});
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
        }
};

exports.postStatus = async (req, res, next) => {
    try {
    const user = await User.findById(req.userId)
            user.status = req.body.status;
    const newUser = await user.save();
            res.status(200).send({ status: newUser.status});
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
        }
};