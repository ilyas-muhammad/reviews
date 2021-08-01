import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { rule } from 'graphql-shield';
import { contains, isNil } from 'ramda';
import { Rule } from 'graphql-shield/dist/rules';
import generateAuthenticatedError from '../../helpers/error/generateAuthenticatedError';
import generateForbiddenError from '../../helpers/error/generateForbiddenError';

export const isAuthenticated = rule()(
  async (parent, args, ctx, info): Promise<true | AuthenticationError> => {
    const user = await ctx.user;

    if (isNil(user)) {
      return generateAuthenticatedError();
    }

    return true;
  },
);

export const isAllowed = (permission: string): Rule => {
  const resolve = async (
    parent: unknown,
    args: unknown,
    info: unknown,
  ): Promise<true | AuthenticationError | ForbiddenError> => {
    return true;
  };

  return rule()(resolve);
};
