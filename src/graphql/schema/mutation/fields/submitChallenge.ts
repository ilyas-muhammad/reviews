import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg, arg, stringArg } from 'nexus';
import { Challenge } from '../../type/Challenge';
import submitChallenge from '../../../resolver/challenge/submitChallenge';

export default (t: ObjectDefinitionBlock<'Mutation'>): void => {
  t.field('submitChallenge', {
    type: Challenge,
    args: {
      studentId: intArg({ required: true }),
      challengeId: intArg({ required: true }),
      solution: stringArg({ required: true }),
    },
    resolve: (_, args) => {
      return submitChallenge(args);
    },
  });
};
