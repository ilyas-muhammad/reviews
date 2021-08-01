import { Schema, model } from 'mongoose';

export interface Challenge {
  incrementId: number;
  student: Student;
  reviewer: Reviewer;
  status: 'PENDING' | 'WAITING_FOR_REVIEW' | 'REVIEWED';
  description: string;
  solution?: string;
  grade?: 'A' | 'B' | 'C';
  comment?: string;
}

interface Student {
  incrementId: number;
  name: string;
}

interface Reviewer {
  incrementId: number;
  name: string;
}

const StudentSchema = new Schema<Student>({
  incrementId: { type: Number, required: true },
  name: { type: String, required: true },
});

const ReviewerSchema = new Schema<Reviewer>({
  incrementId: { type: Number, required: true },
  name: { type: String, required: true },
});

const ChallengSchema = new Schema<Challenge>({
  incrementId: { type: Number },
  student: { type: StudentSchema },
  reviewer: { type: ReviewerSchema },
  status: { type: String, required: true, default: 'PENDING' },
  description: { type: String, required: true },
  solution: { type: String, default: null },
  grade: { type: String, default: null },
  comment: { type: String, default: null },
});

const ChallengeModel = model<Challenge>('challenges', ChallengSchema);

export default ChallengeModel;
