import { Schema, model } from 'mongoose';

export interface Student {
  incrementId: number;
  name: string;
}

const StudentsSchema = new Schema<Student>({
  incrementId: { type: Number },
  name: { type: String, required: true },
});

const StudentModel = model<Student>('students', StudentsSchema);

export default StudentModel;
