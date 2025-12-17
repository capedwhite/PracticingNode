import express from "express";
import { getAll, getByid, save } from "../Controller/customerController.js";

export const router = express.Router()
router.get("/",getAll)
router.post("/",save)
router.get("/:id",getByid)