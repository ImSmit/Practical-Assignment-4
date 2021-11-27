//To make server
const { request } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("Hello World its smit")
})
//--------------------Arrays------------------------
//seller Array -------------------------------------
const seller = [{
    seller_id : "1",
    name : "bhatia",
    product_ids: ""
}]
//Prosdct Array ------------------------------------
const product = [{
    product_id:"1",
    title:"S8",
    price : "68000",
    category : "Premium",
    company_id: "1",
    seller_id:"1",
}]
//Company Array -------------------------------------
const company = [{
    company_id : "1",
    name : "samsung",
    product_ids : "1"
}]
// const company = require("./routs/company");
//---------------------Disply company-----------------------
app.get('/listcompany', (req, res) => {
    res.send(company);
});
//---------------------Disply seller-----------------------
app.get('/listseller', (req, res) => {
    res.send(seller);
});
//---------------------Disply product-----------------------
app.get('/listproduct', (req, res) => {
    res.send(product);
});

//--------------------Add seller---------------------------
app.post("/addseller" , (req,res) => {
    const sel = req.body;
    seller.push(sel);
    res.send('created');
});

//--------------------Add company---------------------------
app.post("/addcompany" , (req,res) => {
    const com = req.body;
    company.push(com);
    res.send('created');
});

//--------------------Add product---------------------------
app.post("/addproduct" , (req,res) => {
    const pro = req.body;
    product.push(pro);
    res.send('created');
});

//-------------------updatecompany-------------------------
app.post("/updatecompany:id", (req,res) => {

})
//--------------------updateseller--------------------------
app.post("/updateseller:id", (req,res) => {

})
//----------------------updateproduct-----------------------
app.post("/updateproduct:id",(req,res) => {
    
})

app.listen(port, () => console.log("listen on port 5000"))