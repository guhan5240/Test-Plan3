import { Router } from 'express'
import productRoutes from './productRoutes.js';
import authroute from './auth.js';
import fileUpload from './fileUpload.js';

const router = Router()
router.use("/products", productRoutes);
router.use("/auth", authroute);
router.use("/upload",fileUpload)
console.log("enter router")
export default router