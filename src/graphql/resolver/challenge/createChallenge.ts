import { code, generateError } from '../../../helpers/error';
import log from '../../../helpers/logger/log';
import save from '../../../models/dao/challenge';
import { findOne as findReviewer } from '../../../models/dao/reviewers';
import { findOne as findStudent } from '../../../models/dao/students';
import { Challenge } from '../../../models/challenges';

export interface Args {
  studentId: number;
  reviewerId: number;
  description: string;
}

export default async (args: Args): Promise<Challenge> => {
  const { CLIENT_ERROR, SERVER_ERROR } = code;
  log('info', 'create-challenge-input', args);
  const { studentId, reviewerId, description } = args;

  const foundReviewer = await findReviewer(reviewerId);
  if (!foundReviewer) throw generateError('Reviewer not found!', CLIENT_ERROR);

  const foundStudent = await findStudent(studentId);
  if (!foundStudent) throw generateError('Student not found!', CLIENT_ERROR);

  const params = {
    reviewer: { incrementId: reviewerId, name: foundReviewer.name },
    student: { incrementId: studentId, name: foundStudent.name },
    description,
  };

  const saved = await save(params);
  if (!saved) {
    log('error', saved);

    throw generateError('Something when wrong', SERVER_ERROR);
  }

  return saved;
};
