import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { stringArg } from 'nexus';
import { Reviewer } from '../../type/Challenge';
import createReviewer from '../../../resolver/reviewer/createReviewer';

export default (t: ObjectDefinitionBlock<'Mutation'>): void => {
  t.field('createReviewer', {
    type: Reviewer,
    args: {
      name: stringArg({ required: true }),
    },
    resolve: (_, args) => {
      return createReviewer(args);
    },
  });
};
