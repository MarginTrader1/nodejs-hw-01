import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  // удаляет последний елемент массива
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
