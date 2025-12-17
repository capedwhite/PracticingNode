import express from "express";
import { getAll } from "../Controller/customerController.js";

export const router = express.Router()
router.get("/",getAll)