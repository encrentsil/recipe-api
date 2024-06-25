import express from "express";
import recipeRouter from "./routes/recipes.js";

//Create Express App
const app = express();

//Define routes
app.get('/',(req,res)=> {
    res.json('Welcome home')
});

app.post('/login', (req,res) => {
    res.json('Login successful')
});

app.patch('/homepage', (req,res)=> {
    res.json('My Recipe')
});

app.delete('/trash', (req,res) => {
    res.json('Deleted item')
});

//Use route
app.use(recipeRouter);

//Listen for incoming requests
app.listen (3000, () => {
    console.log('App listenng on port 3000')
});