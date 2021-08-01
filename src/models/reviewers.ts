import { Schema, model } from 'mongoose';

export interface Reviewer {
  incrementId: number;
  name: string;
}

const ReviewersSchema = new Schema<Reviewer>({
  incrementId: { type: Number },
  name: { type: String, required: true },
});

const ReviewerModel = model<Reviewer>('reviewers', ReviewersSchema);

export default ReviewerModel;
