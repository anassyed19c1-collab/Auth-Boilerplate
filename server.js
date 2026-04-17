import app from './src/app.js'
import connectDB from './src/config/db.js';
import { ENV } from './src/config/env.js';

connectDB()

const PORT = ENV.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})