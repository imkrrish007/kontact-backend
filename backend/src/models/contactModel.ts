import { model, Schema } from 'mongoose';
import { Icontact } from '../types/ContactTypes';

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
    },
    phone: Number,
    email: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default model<Icontact>('contacts', ContactSchema);
