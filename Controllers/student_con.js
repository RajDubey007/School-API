import mongoose from "mongoose";

const getStudentData = async (req, res) => {
    try {
        const student = await student_Model.find({});

        res.json({
            status: 200,
            message: "Data Found all students",
            data: student
        });
    } catch (error) {
        res.json({
            status: 404,
            error: "No Data Found"
        });
    }
}

const postStudentData = async (req, res) => {
    try {
        const { name, email, password, class_room, dob, address } = req.body;

        const student = new student_Model({
            name,
            email,
            password,
            class_room,
            dob,
            address
        });

        const studentAdd = await student.save();

        res.json({
            status: 200,
            message: "Data Found all students",
            data: studentAdd
        });
    } catch (error) {
        res.json({
            status: 404,
            error: "No Data Found"
        });
    }
}

export { getStudentData, postStudentData }