import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts.length);
  return contacts.length;
};

await countContacts();
