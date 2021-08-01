import ReviewerModel, { Reviewer } from '../reviewers';

export const find = async (filter): Promise<Reviewer[]> => {
  const result = await ReviewerModel.find(filter);

  return result;
};
const findAndCount = async (): Promise<number> => {
  let count = 0;
  await ReviewerModel.count({}, function(err, c) {
    if (err) count = 0;
    else count = c;
  });

  return count + 1;
};

const save = async (name: string): Promise<Reviewer> => {
  const count = await findAndCount();
  const result = await ReviewerModel.create({
    incrementId: count,
    name,
  });

  return result;
};

export default save;
