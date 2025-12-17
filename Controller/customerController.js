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
    console.log(body)
    if(body.customerName===""){
        return res.status(500).send({message:"Customer name cannot be empty"})
    }
    const user=Customer.create({
        customerName: body.name,
        customerAddress: body.address,
        customerNumber: body.number,
        customerPassword:body.password
    })
    return res.status(200).send({message:"added data sucessfully"})

}
 catch(e){
    res.status(500).send(e.message)
    
 }
}
export const getByid= async(req,res) =>{
    try{
        const {id} = req.params
        const user = await Customer.findOne({where:{customerId:id}});
        if(!user){
            return res.status(500).send({message:"User not found"});
        }
        res.status(200).send({data:user , message:"data fetched sucessfully"})
    }
    catch(e){
      res.status(500).send({message:e.message})
    }
}