import { code, generateError } from '../../../helpers/error';
import log from '../../../helpers/logger/log';
import save from '../../../models/dao/reviewers';
import { Reviewer } from '../../../models/reviewers';

export interface Args {
  name: string;
}

export default async (args: Args): Promise<Reviewer> => {
  const { SERVER_ERROR } = code;
  try {
    log('info', 'create-reviewer-input', args);

    const saved = await save(args.name);

    return saved;
  } catch (err) {
    log('error', err.message, err);

    throw generateError('Something when wrong', SERVER_ERROR);
  }
};
