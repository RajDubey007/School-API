import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    class_room: {
        type: String,
        required: true
    }
});

export const teacher_Model = mongoose.model("teachers", teacherSchema);