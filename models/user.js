import mongoose from "mongoose";

const schema =new mongoose.Schema({
    name: String,
    email: {
        required:true,
        type:String,
        unique:true
    },
    password: {
        required:true,
        type:String,
        select: false,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }
});

export const User =mongoose.model("User",schema);