import log from '../../../helpers/logger/log';
import { find } from '../../../models/dao/students';
import { Student } from '../../../models/students';

export interface Args {
  id?: number;
}

export default async (args: Args): Promise<Student[]> => {
  log('info', 'get-student-input', args);
  const { id } = args;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {};
  if (id) params.incrementId = id;

  const students = await find(params);

  return students;
};
