import {Customer} from "../Model/UserModel.js"
export const getAll = async(req,res)=>{
    try{
const customer = await Customer.findAll();
res.status(500).send({data:customer,message:"data fetched sucessfully"})
    }
    catch(e){
res.send({error: e.message})
    }
}

export const save=async(req,res)=>{
try{
    const body = req.body;
    
}
 catch(e){
    res.status(500).send(e.message)
    
 }
}