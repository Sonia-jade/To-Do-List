// import
const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs")
const fs=require("fs")
const app=express()

// config
app.set("views engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))

// giving data to  server
app.get("/",function(req,res){
    var todo=JSON.parse(fs.readFileSync("./source/todolist.json"))
    todo=todo.todoList
    res.render("index.ejs",{
       todo:todo
    })
})

// server given data
app.post("/update",function(req,res){
    var data=req.body.todo
    var todo=JSON.parse(fs.readFileSync("./source/todolist.js"))

    fs.writeFileSync("source/todolist.json",todo,function(){
        console.log("finished")
    })
    res.redirect("/")
})




app.listen(3000,function(){
    console.log("server is running in 3000")
})