const fs = require("fs/promises");

const contactsPath = require("./db/contacts.json");

console.log(contactsPath);

const contacts = {
  contactsPath,
};

module.exports = contacts;
