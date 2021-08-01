import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import getSchema from './getSchema';

import { permissions } from './shield/permissions';

const getServer = (): ApolloServer => {
  const schema = getSchema();
  const schemaWithPermission = applyMiddleware(schema, permissions);

  return new ApolloServer({
    schema: schemaWithPermission,
    introspection: true,
    playground: true,
    cacheControl: false,
  });
};

export default getServer;
