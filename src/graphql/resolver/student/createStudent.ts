import { code, generateError } from '../../../helpers/error';
import log from '../../../helpers/logger/log';
import save from '../../../models/dao/students';
import { Student } from '../../../models/students';

export interface Args {
  name: string;
}

export default async (args: Args): Promise<Student> => {
  const { SERVER_ERROR } = code;
  try {
    log('info', 'create-student-input', args);

    const saved = await save(args.name);

    return saved;
  } catch (err) {
    log('error', err.message, err);

    throw generateError('Something when wrong', SERVER_ERROR);
  }
};
