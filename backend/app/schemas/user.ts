import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  phone: { type: String, required: false, unique: false },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    validate: {
      validator: function (value: any) {
        // Expresión regular para validar el formato de correo electrónico
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "El campo de correo electrónico no es válido.",
    },
  },
  address: { type: String, required: false, unique: false },
  password: { type: String, required: true, unique: false },
  image: { type: String, required: false, unique: false },
  role: { type: String, required: true, unique: false },
});

export default mongoose.model("User", userSchema);