import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors'
const app=express();

app.use(express.json());//allows sending json data from client
app.use(cors());//allows frontend to access backend
const db=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"books_dataset"

});

app.listen(8989,()=>{
    console.log("Connected to backend");
});

app.get("/books",(req,res)=>{
    const q="SELECT * from books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    
})

app.post("/books",(req,res)=>{
    const q="INSERT INTO books(`title`,`desc`,`cover`,`price`) VALUES (?)";
    const values=[
        req.body.title,//accessing a data from request body
        req.body.desc,
        req.body.cover,
        req.body.price
    ];
    console.log("working");
        db.query(q,[values],(err,data)=>{
        if(err)return res.json(err);
    })
})
app.get("/",(req,res)=>{
    res.json("hi server connected");
})

