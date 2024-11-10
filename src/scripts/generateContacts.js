import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsData = await readContacts();
    for (let i = 0; i < number; i++) {
      contactsData.push(createFakeContact());
    }
    await writeContacts(contactsData);
    console.log(`${number} нових контактів успішно додано.`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
