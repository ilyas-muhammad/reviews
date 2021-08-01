import * as bodyParser from 'body-parser';
import * as express from 'express';
import { getValidatedNumericConfig } from './helpers/config';
import * as cors from 'cors';
import { log } from './helpers/logger';
import { getServer } from './graphql';
import connection from './models/connection';

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json({ limit: '6mb' }));
app.use(bodyParser.urlencoded({ limit: '6mb', extended: true }));
app.use(express.static('public'));

app.use('/ping', (req, res) => res.send('pong'));

const server = getServer();

server.applyMiddleware({
  app,
  path: '/',
});

const port = getValidatedNumericConfig('APP_PORT') || 4000;

connection()
  .then((_) => log('info', 'mongo connected sucessfully'))
  .catch((err) => log('error', 'mongo connection error', err.message));

app.listen(
  {
    port,
  },
  () => {
    log('info', `Server is running on PORT: ${port}`);
  },
);
