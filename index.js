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
const seller = require("./routs/seller")
//Prosdct Array ------------------------------------
const product = require("./routs/product");
//Company Array -------------------------------------
const company = require("./routs/company")
// const company = require("./routs/company");
//---------------------Disply company-----------------------
app.get('/list-company', (req, res) => {
    res.send(company);
});
//---------------------Disply seller-----------------------
app.get('/list-seller', (req, res) => {
    res.send(seller);
});
//---------------------Disply product-----------------------
app.get('/list-product', (req, res) => {
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
app.post("/updatecompany/:id", (req,res) => {
    try {
        const findIndex = company.findIndex(comp => comp.company_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Company id is not found.'})
        else {
            company[findIndex] = req.body;
            return res.json({statusCode: 200, data: company[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'error'});
    }
})
//--------------------updateseller--------------------------
app.post("/updateseller/:id", (req,res) => {
    try {
        const findIndex = seller.findIndex(sel => sel.seller_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Seller id is not found.'})
        else {
            seller[findIndex] = req.body;
            return res.json({statusCode: 200, data: seller[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'error'});
    }
})
//----------------------updateproduct-----------------------
app.post("/updateproduct/:id",(req,res) => {
    try {
        const findIndex = product.findIndex(prod => prod.product_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Product ID not found.'})
        else {
            product[findIndex] = req.body;
            return res.json({statusCode: 200, data: product[findIndex]});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
})

//-------------------------delete company------------------------------
app.delete("/company-delete/:id",(req,res) => {
    try{
        const findIndex=company.findIndex(com=>com.company_id === req.params.id)
        if(findIndex == -1) return res.json({statecode:200, messgae:"company not found..!"})
        else{
            company.splice(findIndex,1)
            return res.json({statecode:400, data:"deleted"});
        }
    }catch(err){
        return res.json({statecode:400, message:'try again..!'});
    }
})

//-------------------------delete company------------------------------
app.delete("/product-delete/:id",(req,res) => {
    try {
        const findIndex = product.findIndex(prod => prod.product_id === req.params.id)
        if(findIndex === -1) return res.json({statusCode: 404, message: 'Product ID not found.'})
        else {
            product.splice(findIndex , 1);
            return res.json({statusCode: 200, data:"deleted"});
        }
    } catch (err) {
        return res.json({statusCode: 400, message: 'Try again.!'});
    }
})

//-------------------------delete company------------------------------
app.delete("/seller-delete/:id",(req,res) => {
    try{
        const findIndex = seller.findIndex(sel=>sel.seller_id === req.params.id)
        if(findIndex == -1)return res.json({statecode:200,message:'Seller not found..!'})
        else{
            seller.splice(findIndex,1);
            return res.json({statecode:400 , data:"deleted"});
        }
    }catch(err){
        return res.json({statecode:400 , message:'try again..!'});  
    }
})
app.listen(port, () => console.log("listen on port 5000"))