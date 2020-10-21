import express from 'express'
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import cors from 'cors'

import errorHandler from './errors/handler'

const app = express();

app.use(cors())
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);
app.use(errorHandler);
app.listen(3333);
