import { AuthenticationError } from 'apollo-server-core';
import { shield } from 'graphql-shield';
import { message } from '../../helpers/error';
import * as rules from './rules';

export const permissions = shield(
  {
    Query: {},
    Mutation: {},
  },
  {
    fallbackError: new AuthenticationError(message.auth.NOT_AUTHENTICATED),
  },
);
