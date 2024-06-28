import express from "express";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";


// //Connect to mongoose
await mongoose.connect(process.env.MONGO_URL);

//Create Express App
const app = express();

//Apply middlewares
app.use(express.json());

// //Define routes
// app.get('/',(req,res)=> {
//     res.json('Welcome home')
// });

// app.post('/login', (req,res) => {
//     res.json('Login successful')
// });

// app.patch('/homepage', (req,res)=> {
//     res.json('My Recipe')
// });

// app.delete('/trash', (req,res) => {
//     res.json('Deleted item')
// });

//Use route
app.use(recipeRouter);
app.use (categoryRouter);

//Listen for incoming requests
const port = process.env.PORT|| 3000;
app.listen (port, () => {
    console.log(`App listening on port 3000 ${port}`);
});

