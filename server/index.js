import { ApolloServer } from 'apollo-server';

import typeDefs from './types';
import resolvers from './resolvers';

import db from '../db/db';
import setup from '../db/index';
import models from '../db/models';

const database = { ...db, ...setup, ...models };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return { ...database };
    },
});

server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
