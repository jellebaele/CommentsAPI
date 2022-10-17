import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  isMailVerfied: boolean;
  isAdmin: boolean;
}

export interface IUserDocument extends IUser, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isMailVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUserDocument>('User', userSchema);

export default UserModel;
