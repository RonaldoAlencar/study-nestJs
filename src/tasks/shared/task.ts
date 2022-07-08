import { Document } from 'mongoose';

export class Task extends Document {
  title: string;
  description: string;
  completed: boolean;
}
