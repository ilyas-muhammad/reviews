import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg, arg, stringArg } from 'nexus';
import { Challenge, GradeEnum, StatusEnum } from '../../type/Challenge';
import getChallenges from '../../../resolver/challenge/getChallenges';

export default (t: ObjectDefinitionBlock<'Query'>): void => {
  t.field('challenges', {
    type: Challenge,
    list: true,
    args: {
      studentId: intArg({ nullable: true }),
      reviewerId: intArg({ nullable: true }),
      challengeId: intArg({ nullable: true }),
      grade: arg({ type: GradeEnum, nullable: true }),
      status: arg({ type: StatusEnum, nullable: true }),
    },
    resolve: async (_, args) => {
      return getChallenges(args);
    },
  });
};
