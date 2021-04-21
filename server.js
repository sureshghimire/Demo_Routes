//run thi server using: npm run start
//nodemon will be user on this server

const express = require('express');
const cors = require('cors');

//call express function
const app = express();
const port = 8888;

//apply middleware to application level
app.use(cors());        //with this middleware we don't need to include CORS headers on each route call
app.use(express.json());      // json body praser new on express 6

//writing own middleware
app.use((req, res, next)=>{
    const { headers, method, url }= req;
    console.log('Running application level middleware');
    console.log(`Method: ${method} ${url} from user-agent ${headers['user-agent']}`);
    res.header(`Cache-control`, 'no-store');
    
    next();
})


//create a get route for '/' 
app.get('/',(req,res)=>{require
    res.send('Hello World');
});



//create a get route for '/json 
app.get('/json',(req,res)=>{
    res.json({message:'hello world!!'})
})

//create a post route for '/json'
app.post('/json', (req,res)=>{
    const body = req.body
    console.log(body);      //print out the post data on console.
    res.json({sucess: true});
})



//start the server on localhoast and port 8888
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});

