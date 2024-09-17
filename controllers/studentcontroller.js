const student = require('../models/student');
const Student=require('../models/student');
async function addStudent(req,res){
    try{
        console.log(req.body)
        let student=new Student(req.body);
        await student.save();;
        console.log("DATA SAVED SUCCESFULLY")
        res.end("Student Added Successfully");
    }
    catch(err){
        console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students=await Student.find({});
        console.log(students,"students")
        res.send(students)
    }
    catch(err){

    }
}
async function getStudentsByRollNo(req,res){
    try{
        let rollNo=parseInt(req.params.rollNo);
        console.log(rollNo,'rollno');
        let students=await student.findOne({rollNo:rollNo});
        console.log(students,'student');
        res.send(students);
    }
    catch(err){

    }
}

module.exports={addStudent,getStudents,getStudentsByRollNo}