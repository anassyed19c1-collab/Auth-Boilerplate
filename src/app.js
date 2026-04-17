import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";

const app = express();


app.use(express.json());


app.use(cookieParser());
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://next-auth-client-nu.vercel.app'
    ],
}))


app.use('/api/auth', authRoutes)


app.get('/', (req, res) => {
    res.json({ message: "Server is Running!" })
})



export default app;