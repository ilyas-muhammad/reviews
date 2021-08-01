import { objectType, enumType } from 'nexus';

export const StatusEnum = enumType({
  name: 'StatusEnum',
  members: ['PENDING', 'WAITING_FOR_REVIEW', 'REVIEWED'],
});

export const GradeEnum = enumType({
  name: 'GradeEnum',
  members: ['A', 'B', 'C'],
});

export const Student = objectType({
  name: 'Student',
  definition(t) {
    t.string('name');
    t.int('incrementId');
  },
});

export const Reviewer = objectType({
  name: 'Reviewer',
  definition(t) {
    t.string('name');
    t.int('incrementId');
  },
});

export const Challenge = objectType({
  name: 'Challenge',
  definition(t) {
    t.int('incrementId');
    t.field('student', { type: Student });
    t.field('reviewer', { type: Reviewer });
    t.field('status', { type: StatusEnum });
    t.string('description');
    t.string('solution', { nullable: true });
    t.field('grade', { type: GradeEnum, nullable: true });
    t.string('comment', { nullable: true });
  },
});
