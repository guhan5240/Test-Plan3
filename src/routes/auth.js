import express from "express"
import { login } from "../controllers/adminController.js";

const authroute = express.Router();

authroute.post("/login",login)

export default authroute;