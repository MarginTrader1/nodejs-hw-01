import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const data = readContacts();
  return data;
};

await getAllContacts();
