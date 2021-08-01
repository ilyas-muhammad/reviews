import { connect } from 'mongoose';
import log from '../helpers/logger/log';

const port = process.env.DB_PORT;
const host = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

async function run(): Promise<void> {
  await connect(`mongodb://${host}:${port}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default run;
