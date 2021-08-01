import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg, arg, stringArg } from 'nexus';
import { Challenge } from '../../type/Challenge';
import createChallenge from '../../../resolver/createChallenge';

export default (t: ObjectDefinitionBlock<'Mutation'>): void => {
  t.field('createChallenge', {
    type: Challenge,
    args: {
      studentId: intArg({ required: true }),
      reviewerId: intArg({ required: true }),
      description: stringArg({ required: true }),
    },
    resolve: (_, args) => {
      return createChallenge(args);
    },
  });
};
