const fs = require("fs/promises");
// const { dirname } = require("path");
const path = require("path");

// const contactsPath = require("./db/contacts.json");
const contactsPath = path.join(__dirname, "db/contacts.json");
// const contactsPath = path.resolve(__dirname, "db/contacts.json");
// console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

//! 2-й варіант запису:
// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

const contacts = {
  contactsPath,
};

module.exports = contacts;
