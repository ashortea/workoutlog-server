require('dotenv').config();

const express = require('express');
const app = express();
const log = require('./controllers/workoutLogcontroller');
const user = require('./controllers/usercontrollers');

const sequelize = require('./db');
sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));  

 
app.use('/log', log); 
app.use('/api', user);



app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));
