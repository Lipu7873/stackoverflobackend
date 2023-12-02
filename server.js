import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import cors from 'cors';

import userRoutes from './routes/user.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("Thsi is a stack overflow clone api")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes)


mongoose.connect(process.env.DBCONNECTION_URL, {
  autoIndex: true,
})
.then(console.log("connected to DB"))
.catch((err) => console.log(err.message))


app.listen(PORT, () => {
    console.log(`server is running up at ${PORT}`);
})


