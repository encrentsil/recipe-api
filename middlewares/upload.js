import multer from "multer";

//Create upload middleware
export const localUpload = multer({dest: 'uploads'});

