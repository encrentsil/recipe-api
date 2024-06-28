import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";

//Create a router
const categoryRouter = Router();

//Define routes
categoryRouter.get('/categories', getCategories)

categoryRouter.post('/categories', postCategory)

export default categoryRouter;