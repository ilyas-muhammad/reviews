import log from '../../../helpers/logger/log';
import { find } from '../../../models/dao/challenge';
import { Challenge } from '../../../models/challenges';

export interface Args {
  studentId?: number;
  challengeId?: number;
  reviewerId?: number;
  grade?: 'A' | 'B' | 'C';
  status?: 'PENDING' | 'WAITING_FOR_REVIEW' | 'REVIEWED';
}

export default async (args: Args): Promise<Challenge[]> => {
  log('info', 'get-challenge-input', args);
  const { studentId, challengeId, reviewerId, grade, status } = args;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {};

  if (studentId) params['student.incrementId'] = studentId;
  if (challengeId) params.incrementId = challengeId;
  if (reviewerId) params['reviewer.incrementId'] = reviewerId;
  if (grade) params.grade = grade;
  if (status) params.status = status;

  const challenges = await find(params);

  return challenges;
};
