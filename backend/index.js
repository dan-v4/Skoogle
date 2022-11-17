const express = require ('express'); // instance of express framework
const cors = require('cors')
const app = express() // makes API reqs
app.use(express.json());

const db = require ('./models');
app.use(cors());


// Routers


const skateRoute = require('./routes/skaters');
app.use("/skaters", skateRoute);

const videoRoute = require('./routes/videos');
app.use("/videos", videoRoute);

const companiesRoute = require('./routes/companies');
app.use("/companies", companiesRoute);


// db updates all tables, then starts running.
db.sequelize.sync().then(() => {
    app.listen(3001, () =>{ 
        console.log("Server running, port 3k1");
    });
});