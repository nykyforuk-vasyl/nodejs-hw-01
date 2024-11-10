import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contactsData = await readContacts();

    if (contactsData.length > 0) {
      contactsData.pop();
      await writeContacts(contactsData);
    }

    console.log('Останній контакт успішно видалено.');
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
