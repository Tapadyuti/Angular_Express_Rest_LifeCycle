const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./dbService");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Create

const db = dbService.getDbServiceInstance();

app.post("/insertPerson", (req,res)=>{
    console.log("Test Post Insert")
    console.log("request Body : ",req.body);
    var data = req.body;
    console.log("Data : ");
    console.dir(data);
    var sql = "INSERT INTO person (PersonName, PersonAddress, dob, email, gender) VALUES ('"+data.personName.toString() +"','"+ data.personAddress.toString() +"','"+ data.personDob.toString() +"','"+ data.personEmail.toString() +"','"+ data.personGender.toString()+"')";
    console.log("SQL : "+sql);
    //var params =[data.PersonName, data.PersonName, data.PersonName, data.PersonName, data.PersonName, data.PersonName]
    //INSERT INTO `shop`.`person` (`PersonId`, `PersonName`, `PersonAddress`, `dob`, `email`, `gender`) VALUES ('9', 'Hanuman', 'India', '0000-00-00', 'rs@rs', 'Male');
    //INSERT INTO 'shop'.'person' ('PersonId', 'PersonName', 'PersonAddress', 'dob', 'email', 'gender') VALUES ('9','Hanuman','India','0000-00-00','hanuman@hanuman.com','male')
    //let result = db.ne
    var result = db.insertNewEntry(sql);
    result.then(data => res.json(data))
    .catch(err=>console.log("err ",err))

});

//read
app.get("/getAll",(req,res)=>{

    
    
    var result = db.getAllData("select * from person");
    result.then(data => res.json(data))
    .catch(err=>console.log("err ",err))

    //console.log("Result ",result);
    
   // console.log("Test GetAlll")
   // res.send("Get ALL ")
})




app.listen(process.env.PORT, ()=>{ console.log(`Listening to ${process.env.PORT}`)})