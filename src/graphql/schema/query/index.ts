import { queryType } from 'nexus';
import healthCheck from './fields/healtCheck';
import challenges from './fields/challenges';
import reviewers from './fields/reviewers';
import students from './fields/students';

export const Query = queryType({
  definition(t) {
    healthCheck(t);
    challenges(t);
    reviewers(t);
    students(t);
  },
});
