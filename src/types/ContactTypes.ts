import { Document } from 'mongoose';

export interface Icontact extends Document {
  name: string;
  phone: number;
  email: string;
}
