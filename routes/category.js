import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { getCategories, postCategory } from "../controllers/category.js";
import { remoteUpload } from "../middlewares/upload.js";




//Create a router
const categoryRouter = Router();

//Define routes
categoryRouter.get('/categories', getCategories)

categoryRouter.post('/categories',checkUserSession, remoteUpload.single('image') ,postCategory)



export default categoryRouter;