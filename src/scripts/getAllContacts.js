import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async (encoding) => {

  // если encoding не определено, то бери 'utf-8'
  let value = encoding ?? 'utf-8';
  const data = await fs.readFile(PATH_DB, value);
  return JSON.parse(data);
};

console.log(await getAllContacts());
