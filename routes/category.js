import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";




//Create a router
const categoryRouter = Router();

//Define routes
categoryRouter.get('/categories', getCategories)

categoryRouter.post('/categories', localUpload.single('image') ,postCategory)



export default categoryRouter;