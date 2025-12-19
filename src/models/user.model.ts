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
//Do not confuse here the USerModel is model which will be used in code for that,
//  the "USer" is name of schema/table/collection which will get created in mongodB 
// and it in db all case will be lowercase suffix by 's' i.e "users"
