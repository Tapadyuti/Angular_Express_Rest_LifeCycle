const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./dbService");

const api = require("./routes/api") 
app.use('/api', api)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//Create

app.get("/",(req,res)=>{
    res.send('Hello app');
})

const db = dbService.getDbServiceInstance();

app.post("/insertPerson", (req,res)=>{
    console.log("Test Post Insert")
    console.log("request Body : ",req.body);
    var data = req.body;
    console.log("Data : ");
    console.dir(data);
    var sql = "INSERT INTO person (PersonName, PersonAddress, dob, email, gender) VALUES ('"+data.personName.toString() +"','"+ data.personAddress.toString() +"','"+ data.personDob.toString() +"','"+ data.personEmail.toString() +"','"+ data.personGender.toString()+"')";
    console.log("SQL : "+sql);
    var result = db.getAllData(sql);
    result.then(data => res.json(data))
    .catch(err=>console.log("err ",err))

});

//read
app.get("/getAll",(req,res)=>{
    var result = db.getAllData("select * from person");
    result.then(data => res.json(data))
    .catch(err=>console.log("err ",err))
})




app.listen(process.env.PORT, ()=>{ console.log(`Listening to ${process.env.PORT}`)})