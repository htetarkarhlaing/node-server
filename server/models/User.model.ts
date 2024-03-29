import { Schema, model, Types } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface User {
  _id?: string;
  username: string;
  email: string;
  password?: string;
  role: string;
  token?: string;
  profile?: Types.ObjectId;
}

const userSchema = new Schema<User>(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    role: {
      type: Types.ObjectId,
      ref: "Role",
    },
    token: { type: String },
    profile: { type: Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator);

const UserModel = model<User>("User", userSchema);

export default UserModel;
