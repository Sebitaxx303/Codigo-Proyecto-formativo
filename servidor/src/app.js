import express from 'express';
import config from './config';
import cors from 'cors'

import talleresRoutes from './routes/Tallerusers.routes'

const app = express();



app.set('port', config.port)
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(talleresRoutes)

export default app