import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import Koa from 'koa';
import cors from '@koa/cors';
import path from 'path';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import cookie from 'koa-cookie';
import { ApolloServer } from 'apollo-server-koa';

import { MovieResolver, TrailerResolver, UserResolver } from './resolvers';
import { AuthRoutes } from './routes';

(async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [MovieResolver, TrailerResolver, UserResolver],
  });

  const app = new Koa();

  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    }),
  );
  app.use(serve(path.join(__dirname + '/../public')));
  app.use(bodyParser());
  app.use(cookie());
  app.use(AuthRoutes.routes());
  app.use(AuthRoutes.allowedMethods());

  const apolloServer = new ApolloServer({
    schema,
    context: (ctx) => ctx,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: {},
  });

  app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
  });
})();
