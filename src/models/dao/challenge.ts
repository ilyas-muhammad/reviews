import { UpdateWriteOpResult } from 'mongoose';
import ChallengeModel, { Challenge } from '../challenges';

const findAndCount = async (): Promise<number> => {
  let count = 0;
  await ChallengeModel.count({}, function(err, c) {
    if (err) count = 0;
    else count = c;
  });

  return count + 1;
};

export const find = async (filter): Promise<Challenge[]> => {
  const result = await ChallengeModel.find(filter);

  return result;
};

export const findOne = async (incrementId: number): Promise<Challenge | null> => {
  const result = await ChallengeModel.findOne({ incrementId });

  return result;
};

export const findByStudentId = async (incrementId: number, studentId: number): Promise<Challenge | null> => {
  const result = await ChallengeModel.findOne({ incrementId, 'student.incrementId': studentId });

  return result;
};

export const findByReviewerId = async (incrementId: number, reviewerId: number): Promise<Challenge | null> => {
  const result = await ChallengeModel.findOne({ incrementId, 'reviewer.incrementId': reviewerId });

  return result;
};

export const update = async (filter, setObj): Promise<UpdateWriteOpResult> => {
  const result = await ChallengeModel.updateOne(filter, {
    $set: { ...setObj },
  });

  return result;
};

const save = async (params): Promise<Challenge> => {
  const count = await findAndCount();
  const result = await ChallengeModel.create({
    incrementId: count,
    student: params.student,
    reviewer: params.reviewer,
    description: params.description,
  });

  return result;
};

export default save;
