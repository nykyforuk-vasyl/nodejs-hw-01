import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contactsData = await readContacts();
    return contactsData;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
