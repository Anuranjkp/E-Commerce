var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "IPHONE 11",
      category: 'mobile',
      description: "This is a Good phone",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956148115"
    },
    {
      name: "Iphone 6",
      category: 'mobile',
      description: "iphone 6 is a good phone",
      image: "https://i1.wp.com/cliktodeal.com/wp-content/uploads/2020/08/iphone-6-silver-e1598425482711.jpg?fit=849%2C983&ssl=1"
    },
    {
      name: "Samsung Galaxy s10",
      category: 'mobile',
      description: "samsung s10 is a Good phone",
      image: "https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg?tr=q-60"
    },
    {
      name: "Macbook Pro",
      category: 'laptop',
      description: "This is a Good phone",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932"
    },
    
  ]
  res.render('admin/view-products',{admin:true,products})

});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')

}) 
router.post('/add-product', (req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)

})
module.exports = router;
