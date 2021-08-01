import log from '../../../helpers/logger/log';
import { find } from '../../../models/dao/reviewers';
import { Reviewer } from '../../../models/reviewers';

export interface Args {
  id?: number;
}

export default async (args: Args): Promise<Reviewer[]> => {
  log('info', 'get-reviewer-input', args);
  const { id } = args;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {};
  if (id) params.incrementId = id;

  const reviewers = await find(params);

  return reviewers;
};
