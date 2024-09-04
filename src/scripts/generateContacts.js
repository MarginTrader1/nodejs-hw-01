import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

const generateContacts = async (number) => {
  // отримуємо інфу про кодування файлу
  const { encoding } = DetectFileEncodingAndLanguage(PATH_DB);

  // читаем файл та отримуємо старі контакти
  const oldContacts = await getAllContacts(encoding);

  //створюємо массив, наповнюємо його через метод fill() та мепаем контакти
  const newContacts = Array(number).fill(0).map(createFakeContact);

  const dataContacts = [...oldContacts, ...newContacts];

  // записуємо в файл db.json
  updateContacts(dataContacts);
};

generateContacts(5);

// JSON.stringify другий аргумент - символ замінник, третій аргумент - відступ

// метод toString() перекодовує дані в формат utf-8 за замовчуванням, але можна передати інші формати

// const text = oldContacts.toString()
