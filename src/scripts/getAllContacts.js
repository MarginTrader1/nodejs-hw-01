import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const  data = await readContacts();
  console.log(data);
  return data;
};

getAllContacts();
