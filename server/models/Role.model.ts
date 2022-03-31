import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Role {
  role: string;
}

const roleSchema = new Schema<Role>(
  {
    role: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

roleSchema.plugin(uniqueValidator);

const RoleModel = model<Role>("Role", roleSchema);

export default RoleModel;
