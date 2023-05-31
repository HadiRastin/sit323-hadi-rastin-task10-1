const express= require("express");
//const res = require("express/lib/response");
const bodyParser = require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({ extended: false }));


const add= (n1,n2) => {
    return n1+n2;
}

const subtract= (n1,n2) => {
    return n1-n2; 
};

const multiplication= (n1,n2) => {
    return n1*n2; 
};

const division= (n1,n2) => {
    return n1/n2; 
};


app.get('/add', (req, res) => {
    res.sendFile('./views/add.html', { root: __dirname });
  });

app.get('/Substraction', (req, res) => {
    res.sendFile('./views/Substraction.html', { root: __dirname });
  });
  
app.get('/multiplication', (req, res) => {
    res.sendFile('./views/multiplication.html', { root: __dirname });
  });

app.get('/division', (req, res) => {
    res.sendFile('./views/division.html', { root: __dirname });
  });


// Substraction 

app.post("/Substraction", (req,res)=>{
    try{
    const n1= parseFloat(req.body.n1);
    const n2=parseFloat(req.body.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = subtract(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } 
    catch(error) { 
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});



// Multipication

app.post("/multiplication", (req,res)=>{
    try{
    const n1= parseFloat(req.body.n1);
    const n2=parseFloat(req.body.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = multiplication(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } 
    catch(error) { 
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


// division


app.post("/division", (req,res)=>{
    try{
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }

    if ( n2 === 0) {
        console.log()
        throw new Error("n2 should not be zero");
    }

    const result = division(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } 
    catch(error) { 
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


// add
app.post("/add", (req,res)=>{
    try{
    const n1= parseFloat(req.body.n1);
    const n2=parseFloat(req.body.n2);
    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = add(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } 
    catch(error) { 
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});


const port=3040;
app.listen(port,() => {
    console.log("hello i'm listening to port " + port);
})

