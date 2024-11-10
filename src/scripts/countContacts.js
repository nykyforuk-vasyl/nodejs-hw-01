import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsData = await readContacts();
    return contactsData.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
