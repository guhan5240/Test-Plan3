import express from "express";
import { createProduct, updateProduct, deleteProduct, listProducts, } from "../controllers/productController.js";
import multer from "multer";
import authMiddleware from "../middleware/authmiddleware.js"; // authmiddleware to check user authorization


const acceptFiles = multer({ storage: multer.memoryStorage() });

const productRoutes = express.Router();

productRoutes.post("/",
    // authMiddleware['Admin'],
    acceptFiles.array("images", 20), createProduct);

productRoutes.put("/",
    // authMiddleware['Admin'],
    acceptFiles.array("images", 20), updateProduct);

productRoutes.delete("/",
    // authMiddleware['Admin'],
    deleteProduct);

productRoutes.get("/", listProducts);

export default productRoutes;
