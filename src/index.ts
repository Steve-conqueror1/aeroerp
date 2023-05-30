import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {AppDataSource} from './dataSource'

const app = express()
dotenv.config()

app.use(express.json());
app.use(
    cors(),
);


const PORT = process.env.PORT || 5000

AppDataSource.initialize().then(() => {
    app.listen(() => {
        console.log(`Server connected at PORT ${PORT}`)
    })
}).catch((err) => console.log("Error occurred", err.message))
