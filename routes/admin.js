var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products)
    res.render('admin/view-products', { admin: true, products });
  })


});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')

})
router.post('/add-product', (req, res) => {

  productHelpers.addProduct(req.body, (id) => {
    let image = req.files.Image
    console.log(id)

    //moving image file to public repository
 

  });
})
router.get('/delete-product/:id', (req,res)=>{
   let proId=req.params.id
   console.log(proId)
  productHelpers.deleteProduct(proId).then((response)=>{
    res.redirect("/admin")
  })
}) 

router.get('/edit-product/:id', async(req,res)=>{
  let product= await productHelpers.getProductDetails(req.params.id)
  console.log(product)
  res.render("admin/edit-product", {product})
});
router.post('/edit-product/:id',(req,res)=>{
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin')
    if(req.files.Image){
      let image=req.files.Image
      let id=req.params.id
      image.mv('./public/product-images/' + id + '.jpg', (err) => {
        if (!err) {
          console.log("Product added successfully")
          res.render("admin/add-product")
        } else {
          console.log(err)
        }
      })
    }
  })
})
module.exports = router;
