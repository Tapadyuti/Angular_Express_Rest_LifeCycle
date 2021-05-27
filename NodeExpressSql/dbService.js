const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("DB "+connection.state);
});

class DbService{
    static getDbServiceInstance(){
        return instance? instance: new DbService(); // this will check if the instance is created if not will be created
    }

    async getAllData(qr){
        try{
            const response = await new Promise((resolve, reject)=>{
                let query = qr;
                connection.query(query, (err,results)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve(results);
                });
            })
            console.log(response);
            return response;
        }
        catch{

        }
    };

    async insertNewEntry(qr){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = qr;
                connection.query(query, (err,results)=>{
                    if(err){
                        reject(new Error(err.message));
                    }
                    resolve(results);
                });
            })
            console.log(response);
            return response;
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = DbService;