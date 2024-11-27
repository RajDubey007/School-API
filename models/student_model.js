import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    class_room : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },

});

export const student_Model = mongoose.model("students", studentSchema);