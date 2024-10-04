const express=require("express")
 const router= express.Router();
 userController=require("../controllers/user");

 router.post('/',userController.createUser)
 router.get('/',userController.getAll)


 module.exports=router;