import oracledb from 'oracledb';
import { config } from '../config/config';

export async function connectToOracle() {
  try {
    await oracledb.createPool({
      user: config.db.user,
      password: config.db.password,
      connectString: config.db.connectString,
    });
    console.log('Connected to Oracle Database');
  } catch (error: any) {
    console.error('Error connecting to Oracle Database:', error.message);
  }
}