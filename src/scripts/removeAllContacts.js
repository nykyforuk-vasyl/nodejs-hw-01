import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти успішно очищено.');
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
