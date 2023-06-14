import express from 'express';
import config from './config';

import talleresRoutes from './routes/Tallerusers.routes'

const app = express();



app.set('port', config.port)
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(talleresRoutes)

export default app