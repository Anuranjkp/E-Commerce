var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    console.log(products)
    res.render('admin/view-products',{admin:true,products});
  })
 

});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')

}) 
router.post('/add-product', (req,res)=>{

    productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id)

    //moving image file to public repository
    image.mv('./public/product-images/'+id+'.jpg',(err)=>{
      if(!err){
        console.log("Product added successfully")
        res.render("admin/add-product")
      }else {
        console.log(err)
      }
    })
 
  });



})
module.exports = router;
