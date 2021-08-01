import { mutationType } from 'nexus';
import createChallenge from './fields/createChallenge';
import submitChallenge from './fields/submitChallenge';
import reviewChallenge from './fields/reviewChallenge';

export const Mutation = mutationType({
  definition(t) {
    createChallenge(t);
    submitChallenge(t);
    reviewChallenge(t);
  },
});
