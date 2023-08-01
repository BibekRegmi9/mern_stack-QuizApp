import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://admin:admin@quiz.uk0uphc.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}