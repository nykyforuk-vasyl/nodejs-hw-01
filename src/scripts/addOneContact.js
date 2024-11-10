import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactsData = await readContacts();
    contactsData.push(createFakeContact());
    await writeContacts(contactsData);
    console.log('Новий контакт успішно додано.');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
