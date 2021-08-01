import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg, arg, stringArg } from 'nexus';
import { Challenge, GradeEnum } from '../../type/Challenge';
import reviewChallenge from '../../../resolver/reviewChallenge';

export default (t: ObjectDefinitionBlock<'Mutation'>): void => {
  t.field('reviewChallenge', {
    type: Challenge,
    args: {
      reviewerId: intArg({ required: true }),
      challengeId: intArg({ required: true }),
      comment: stringArg({ nullable: true }),
      grade: arg({ type: GradeEnum, required: true }),
    },
    resolve: (_, args) => {
      return reviewChallenge(args);
    },
  });
};
