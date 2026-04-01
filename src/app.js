import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'

const app = express();



app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))


app.get('/', (req, res) => {
    res.json({ message: "Server is Running!" })
})



export default app