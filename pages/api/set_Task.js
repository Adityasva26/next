import { mongoconnect } from "@/libs/mongoseconnect";
import Task from "@/module/task";

export default async function handler (req,res){
    if(req.method !== "POST"){
        res.status(405).send({msg:"only post request are allowed here!"})
        return;
    }
    const {task}=req.body

    try{
     await mongoconnect();
     Task.create({task}).then((data)=>{
        res.status(200).send({data:data,msg:"successfully"})
     })

    }catch (err){
        res.status(400).send({msg:"Something Went Wrong!"})
    }
}