import { ObjectDefinitionBlock } from 'nexus/dist/definitions/objectType';
import { intArg } from 'nexus';
import { Student } from '../../type/Challenge';
import getStudents from '../../../resolver/student/getStudents';

export default (t: ObjectDefinitionBlock<'Query'>): void => {
  t.field('students', {
    type: Student,
    list: true,
    args: {
      id: intArg({ nullable: true }),
    },
    resolve: async (_, args) => {
      return getStudents(args);
    },
  });
};
