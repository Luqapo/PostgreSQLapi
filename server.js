const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv/config');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');

const sequelize = require('./util/database');
const Region = require('./models/region');
const Rejon = require('./models/rejon');
const Skala = require('./models/skala');
const Route = require('./models/route');

const userRoutes = require('./routes/user');
const cragsRoutes = require('./routes/crags');

const PORT = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
});

const app = express();

app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api', cragsRoutes);

Rejon.belongsTo(Region);
Skala.belongsTo(Rejon);
Route.belongsTo(Skala);

sequelize
    .sync()
    .then(res => {
        app.listen(PORT, () => {
            console.log(`Server listen at port ${PORT}`);
            app.emit("appStarted");
        });
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;