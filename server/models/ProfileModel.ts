import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Profile {
  _id?: string;
  slug?: string;
  fullname?: string;
  phone?: string;
  address?: string;
  gender?: string;
  dateOfBirth?: string;
  avatar?: string;
}

const profileSchema = new Schema<Profile>(
  {
    slug: { type: String, unique: true },
    fullname: { type: String },
    phone: { type: String },
    address: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

profileSchema.plugin(uniqueValidator);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
