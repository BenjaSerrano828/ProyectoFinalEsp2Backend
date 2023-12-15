import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    rut: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
