const env = require('dotenv/config');
const sequelize = require('./util/database');
const fs = require('fs');

const Region = require('./models/region');
const Rejon = require('./models/rejon');
const Skala = require('./models/skala');
const Route = require('./models/route');

Rejon.belongsTo(Region);
Skala.belongsTo(Rejon);
Route.belongsTo(Skala);

sequelize
    .sync({ force: true })
    .then( res => {
        let juraDB = {};

fs.readFile('./Data/jura.json', (err,data) => {
    if(!err){
         juraDB = JSON.parse(data).regiony;
            juraDB.forEach(async region => {

                const regionName = region.name;
                console.log(regionName);

                const newRegion = await Region.create({
                    name: regionName
                });

                region.rejony.forEach(async rejon => {
                    console.log(regionName, rejon.name);
                    const rejonName = rejon.name;

                    const newRejon = await Rejon.create({
                        regionId: newRegion.id,
                        name: rejonName
                    });


                    rejon.skaly.forEach(async skala => {
                        console.log(rejonName, skala.name);
                        const skalaName = skala.name;

                        const newSkala = await Skala.create({
                            regionId: newRegion.id,
                            rejonId: newRejon.id,
                            name: skalaName
                        });
    

                        skala.drogi.forEach(async droga => {
                            console.log(droga);

                            const newDroga = await Route.create({
                                regionId: newRegion.id,
                                rejonId: newRejon.id,
                                skalaId: newSkala.id,
                                name: droga.name,
                                wycena: droga.wycena,
                                przejscia: droga.przejscia,
                                ocena: droga.ocena
                            });
        
                        })
                    })
                })
            });
    } else {
        console.log('Błąd' +err);
    }
})
    })
    .catch(err => {
        console.log(err);
    });

