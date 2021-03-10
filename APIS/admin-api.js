//create a mini exp app
const exp=require("express")
const adminApiObj=exp.Router();

//testing route
adminApiObj.get("/getadmins",(req,res)=>{
    res.send({message:"res from admon api"})
})


//export
module.exports=adminApiObj;