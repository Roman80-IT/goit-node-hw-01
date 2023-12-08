const fs = require("fs/promises");
// const { dirname } = require("path");
const path = require("path");
const { nanoid } = require("nanoid");

// const contactsPath = require("./db/contacts.json");
const contactsPath = path.join(__dirname, "db/contacts.json");
// const contactsPath = path.resolve(__dirname, "db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

//! 2-й варіант запису:
// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };

async function getContactById(id) {
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const people = await listContacts();
  const result = people.find((item) => item.id === id);
  return result || null;
}

async function removeContact(id) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const people = await listContacts();
  const index = people.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = people.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(people, null, 3));
  return result;
}

async function addContact(data) {
  // Повертає об'єкт доданого контакту.
  const people = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  people.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(people, null, 3));
  return newContact;
}

const contacts = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
