import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg } from 'nexus';
import { Reviewer } from '../../type/Challenge';
import getReviewers from '../../../resolver/reviewer/getReviewers';

export default (t: ObjectDefinitionBlock<'Query'>): void => {
  t.field('reviewers', {
    type: Reviewer,
    list: true,
    args: {
      id: intArg({ nullable: true }),
    },
    resolve: async (_, args) => {
      return getReviewers(args);
    },
  });
};
