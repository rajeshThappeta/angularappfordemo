const exp = require("express")
const app = exp();

//import dotenv module
require("dotenv").config()

//import path module
const path=require("path")

//merge this server with dist folder
app.use(exp.static(path.join(__dirname,'dist/cdb35meanapp2')))


const mc = require("mongodb").MongoClient;

//import api objects
const userApiObj = require("./APIS/user-api")
const adminApiObj = require("./APIS/admin-api")

//forwarding req obj to API routes
app.use("/user", userApiObj)
app.use("/admin", adminApiObj)

//connect to db server
const dburl = process.env.DBURL;
mc.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("err in db connect ", err)
    }
    else {
        //get database object
        const databaseobj = client.db("cdb35db")

        //get collection
        const userCollObj = databaseobj.collection("usercollection")

        //share it tp APIS
        app.set("userCollObj", userCollObj)

        console.log("Connected to DB")

    }
})





//middleware to deal with invalid path
app.use((req,res,next)=>{
    res.send({message:req.url+" is invalid"})
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:err.message})
})

//assign port number
const port=process.env.PORT;
app.listen(port, () => { console.log("server on port 3000") })