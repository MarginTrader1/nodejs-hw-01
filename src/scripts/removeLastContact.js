import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  // удаляет последний елемент массива
  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
