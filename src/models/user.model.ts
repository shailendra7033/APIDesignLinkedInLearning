import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  interestedLanguage: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    interestedLanguage: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export const UserModel = model<IUser>('User', UserSchema);
