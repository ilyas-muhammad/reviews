import StudentModel, { Student } from '../students';

export const find = async (filter): Promise<Student[]> => {
  const result = await StudentModel.find(filter);

  return result;
};

const findAndCount = async (): Promise<number> => {
  let count = 0;
  await StudentModel.count({}, function(err, c) {
    if (err) count = 0;
    else count = c;
  });

  return count + 1;
};

const save = async (name: string): Promise<Student> => {
  const count = await findAndCount();
  const result = await StudentModel.create({
    incrementId: count,
    name,
  });

  return result;
};

export default save;
