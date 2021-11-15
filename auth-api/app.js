import express from 'express';
import cors from 'cors';

import * as db from './src/config/db/initialData.js';
import UserRouter from "./src/modules/user/routes/UserRoutes.js";
import checkToken from './src/config/auth/checkToken.js';

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

db.createInitialData();

app.use(cors());

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: "Auth API",
        status: "Up",
        httpStatus: 200
    })
})

app.use(express.json());
app.use(UserRouter);

app.listen(PORT, () => {
    console.info(`Server stared successfuly at port ${PORT}`);
});