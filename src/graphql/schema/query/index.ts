import { queryType } from 'nexus';
import healthCheck from './fields/healtCheck';
import challenges from './fields/challenges';

export const Query = queryType({
  definition(t) {
    healthCheck(t);
    challenges(t);
  },
});
