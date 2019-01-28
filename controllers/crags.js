const Region = require('../models/region');
const Rejon = require('../models/rejon');
const Skala = require('../models/skala');
const Route = require('../models/route');
 
exports.getRegion = async (req, res, next) => {
    try {
        const regiony = await Region.findAll();
        res.status(200).send(regiony);
    } catch (err) {
        console.log(err);
    }
};

exports.getRejon = async (req, res, next) => {
    try {
    const rejony = await Rejon.findAll({where: { regionId: req.params.regionId }, include: [{ model: Region }]});
    res.status(200).send(rejony);
    } catch (err) {
        console.log(err);
    }
};

exports.getSkala = async (req, res, next) => {
    try {
        const skaly = await Skala.findAll({where: { rejonId: req.params.rejonId }});
        res.status(200).send(skaly);
    } catch (err) {
        console.log(err);
    }
};

exports.getRoutes = async (req, res, next) => {
    try {
        const routes = await Route.findAll({where: { skalaId: req.params.skalaId }});
        res.status(200).send(routes);
    } catch (err) {
        console.log(err);
    }
}