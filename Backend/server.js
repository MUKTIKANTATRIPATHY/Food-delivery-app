import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import dotenv from 'dotenv'


// Dotenv configuration
dotenv.config();


// app config
const app = express()
const port = process.env.PORT;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endPoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, () =>{
    console.log(`Server Started on http://localhost:${port}`);
    
})

// mongodb+srv://FoodDelivery:mukti2003@cluster0.oonaqij.mongodb.net/?