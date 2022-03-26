import { Schema, model } from "mongoose";

interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}

const userSchema = new Schema<User>({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  token: { type: String },
});

const UserModel = model<User>("User", userSchema);

export default UserModel;
