import express from "express";
import { connection } from "./Database/db.js";
import { router } from "./Route/customerRoute.js";

console.log("RUNNING")
const app=express();
const port="4000"

connection();
app.use(express.json())
app.use("/api/customers",router);
app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})