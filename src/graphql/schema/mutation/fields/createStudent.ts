import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { stringArg } from 'nexus';
import { Student } from '../../type/Challenge';
import createStudent from '../../../resolver/student/createStudent';

export default (t: ObjectDefinitionBlock<'Mutation'>): void => {
  t.field('createStudent', {
    type: Student,
    args: {
      name: stringArg({ required: true }),
    },
    resolve: (_, args) => {
      return createStudent(args);
    },
  });
};
