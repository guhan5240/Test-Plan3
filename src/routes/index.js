import { Router } from 'express'
import productRoutes from './productRoutes.js';
import authroute from './auth.js';

const router = Router()
router.use("/products", productRoutes);
router.use("/auth", authroute);

export default router