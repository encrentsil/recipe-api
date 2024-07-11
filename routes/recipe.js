import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

//Create router
const recipeRouter = Router();

//Apply Middlewares


//Define
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',checkUserSession, remoteUpload.single('image') ,postRecipes,);

recipeRouter.patch('/recipes/:id', patchRecipe, checkUserSession);

recipeRouter.delete('/recipes/:id', deleteRecipe, checkUserSession);

recipeRouter.get('/recipes/:id', getRecipe);

//Export router
export default recipeRouter;