const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
var collection=["new1"];
let workItem=[];

app.get("/",function(req,res){
  var today=new Date();
  var options={
    weekday :"long",
    day: "numeric",
    month :"long"
  };
  var day= today.toLocaleDateString("hi-IN",options);
  res.render("list",{Today:day,collect:collection});
  res.send();
});

app.post("/",function (req,res) {
  let items=req.body.newItem;
  if(req.body.list==="work"){
    workItem.push(items);
    res.redirect("/work");
  }else{
    collection.push(items);
    res.redirect("/");
  }


})
app.get("/work",function (req,res) {
  res.render("list",{Today:"work",collect:workItem});

})
// app.post("/work",function (req,res) {
//   let items=req.body.newItem;
//   workItem.push(items);
//   res.redirect("/work");
//
// })




app.listen(3000,function () {
  console.log("running");

})
