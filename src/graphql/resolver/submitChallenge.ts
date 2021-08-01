import { code, generateError } from '../../helpers/error';
import log from '../../helpers/logger/log';
import { findByStudentId, findOne, update } from '../../models/dao/challenge';
import { Challenge } from '../../models/challenges';

export interface Args {
  studentId: number;
  challengeId: number;
  solution: string;
}

export default async (args: Args): Promise<Challenge> => {
  const { CLIENT_ERROR, SERVER_ERROR } = code;
  log('info', 'submit-challenge-input', args);

  const { studentId, challengeId, solution } = args;

  const found = await findByStudentId(challengeId, studentId);

  if (!found) throw generateError('Challenge not found!', CLIENT_ERROR);

  if (found.status !== 'PENDING') throw generateError('Challenge already submitted!', CLIENT_ERROR);

  const filter = { incrementId: challengeId };
  const setObj = { solution, status: 'WAITING_FOR_REVIEW' };

  await update(filter, setObj);

  const result = await findOne(challengeId);

  if (!result) throw generateError('Challenge not found!', CLIENT_ERROR);

  return result;
};
