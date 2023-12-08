const argv = require("yargs").argv;

const people = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await people.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await people.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await people.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await people.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
