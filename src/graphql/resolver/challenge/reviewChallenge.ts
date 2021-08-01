import { code, generateError } from '../../../helpers/error';
import log from '../../../helpers/logger/log';
import { findByReviewerId, findOne, update } from '../../../models/dao/challenge';
import { Challenge } from '../../../models/challenges';

export interface Args {
  challengeId: number;
  reviewerId: number;
  grade: 'A' | 'B' | 'C';
  comment?: string;
}

export default async (args: Args): Promise<Challenge> => {
  const { CLIENT_ERROR, SERVER_ERROR } = code;
  log('info', 'review-challenge-input', args);

  const { reviewerId, challengeId, grade, comment } = args;

  const found = await findByReviewerId(challengeId, reviewerId);

  if (!found) throw generateError('Challenge not found!', CLIENT_ERROR);

  const notEligibleStatuses = ['PENDING', 'REVIEWED'];
  if (notEligibleStatuses.includes(found.status)) throw generateError('status not eligible!', CLIENT_ERROR);

  const filter = { incrementId: challengeId };
  const setObj = { grade, comment, status: 'REVIEWED' };

  await update(filter, setObj);

  const result = await findOne(challengeId);

  if (!result) throw generateError('Challenge not found!', CLIENT_ERROR);

  return result;
};
