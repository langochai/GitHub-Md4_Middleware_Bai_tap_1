import express from "express";
import bodyParser from "body-parser";
import {addUser} from "./src/middleware/middleware";
const PORT = 8000;
const user = {
    username: "admin",
    password: "what"
};

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(addUser)
app.use(express.json())
app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',(req,res)=>{
    res.render('login')
});
app.post('/',addUser,(req,res)=>{
    // console.log(user)
    // // @ts-ignore
    // console.log(req.user)
    // @ts-ignore
    if(JSON.stringify(req.user) === JSON.stringify(user)) res.status(200).json({message:'that is the right user!'})
    else res.status(401).json({message:`oh hell naw that's the wrong user baby`})
})

app.listen(PORT,()=>{
    console.log(`segs at ${PORT}`)
});