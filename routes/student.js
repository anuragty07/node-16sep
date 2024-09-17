const express=require('express');
const studentController=require('../controllers/studentController')
const router=express.Router();


router.post('/add/user',(req,res)=>{
    studentController.addStudent(req,res)
})
router.get('/users',(req,res)=>{
    studentController.getStudents(req,res)
})
module.exports=router;