import { teacher_Model } from "../models/teacher_model.js"

const getTeacherData = async (req, res) => {
    try {
        const teacher = await teacher_Model.find({});
        console.log("teacher >>>", teacher);

        res.json({
            status: 200,
            message: "Data Found all teachers",
            data: teacher
        });   
    } catch (error) {;
        res.json({
            status: 404,
            error : "No Data Found"
        });
    }
}

const postTeacherData = async (req, res) => {
    try {
        const { name, email, password, subject, class_room } = req.body;
        const teacher = new teacher_Model({
            name,
            email,
            password,
            subject,
            class_room
        });

       const teacherAdd = await teacher.save();

       console.log("teacherAdd", teacherAdd);
       
       res.json({
            status: 200,
            message: "Data Found all teachers",
            data: teacherAdd
        });   
    } catch (error) {
        res.json({
            status: 404,
            error : "No Data Found"
        });
    }
}

export { getTeacherData, postTeacherData }