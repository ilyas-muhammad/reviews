import { mutationType } from 'nexus';
import createChallenge from './fields/createChallenge';
import submitChallenge from './fields/submitChallenge';
import reviewChallenge from './fields/reviewChallenge';

import createReviewer from './fields/createReviewer';

import createStudent from './fields/createStudent';

export const Mutation = mutationType({
  definition(t) {
    createChallenge(t);
    submitChallenge(t);
    reviewChallenge(t);

    createReviewer(t);

    createStudent(t);
  },
});
