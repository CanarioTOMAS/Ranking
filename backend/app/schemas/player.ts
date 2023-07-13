import mongoose from "mongoose";
import userSchema from "./user";

const playerSchema = new mongoose.Schema({
    dateBirth:{type:Date, required:false, unique:false},
    gender: {type:String, required:false, unique:false},
    surname: {type:String, required:false, unique:false},
    age:{type:String, required:false, unique:false},
    nationality:{type:String, required:true, unique:false},
});

const PlayerSchema = userSchema.discriminator("Player", playerSchema);
 

export default PlayerSchema;
 