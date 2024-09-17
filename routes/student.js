const express=require('express');
const studentController=require('../controllers/studentcontroller')
const router=express.Router();


router.post('/add/user',(req,res)=>{
    studentController.addStudent(req,res)
})
router.get('/users',(req,res)=>{
    studentController.getStudents(req,res)
})
router.get('/user/:rollNo',(req,res)=>{
    studentController.getStudentsByRollNo(req,res)
})
module.exports=router;