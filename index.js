import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";



// //Connect to mongoose
await mongoose.connect(process.env.MONGO_URL);

//Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,

    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

//Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

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
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs/'));

//Listen for incoming requests
const port = process.env.PORT|| 3000;
app.listen (port, () => {
    console.log(`App listening on port ${port}`);
});

