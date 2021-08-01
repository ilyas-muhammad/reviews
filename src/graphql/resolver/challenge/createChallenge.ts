import { code, generateError } from '../../../helpers/error';
import log from '../../../helpers/logger/log';
import save from '../../../models/dao/challenge';
import { Challenge } from '../../../models/challenges';

export interface Args {
  sku: string;
  quantity: number;
}

export default async (args: Args): Promise<Challenge> => {
  const { CLIENT_ERROR, SERVER_ERROR } = code;
  try {
    log('info', 'create-challenge-input', args);

    const saved = await save();

    return saved;
  } catch (err) {
    log('error', err.message, err);

    throw generateError('Something when wrong', SERVER_ERROR);
  }
};
