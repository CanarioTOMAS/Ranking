import mongoose from "mongoose";
import userSchema from "./user";

const clubSchema = new mongoose.Schema({
    description:{type:String, required:false, unique:false},
    turnament: {type:String, required:false, unique:false},
    shift: {type:String, required:false, unique:false},
});

const ClubSchema = userSchema.discriminator("Club", clubSchema);
 

export default ClubSchema;
 