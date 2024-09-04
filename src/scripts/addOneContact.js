import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const addOneContact = async () => {
  const contacts = await getAllContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);

  // записуємо в файл db.json
  await updateContacts(contacts);
};

addOneContact();
