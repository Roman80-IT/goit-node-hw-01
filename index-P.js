//? step 1: create
// const people = require("./contacts");
// console.log(people);

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await people.listContacts();
//       return console.log(allContacts);
//     case "get":
//       const oneContact = await people.getContactById(id);
//       return console.log(oneContact);
//     case "add":
//       const newContact = await people.addContact({ name, email, phone });
//       return console.log(newContact);
//     case "remove":
//       const deleteContact = await people.removeContact(id);
//       return console.log(deleteContact);
//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// };

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Wasya Ostapenko",
//   email: "Wasyl_na_droti@gmail.com",
//   phone: "+38(066) 170-15-89",
// });
// invokeAction({action: "remove", id: "uNrjVoY1Ll0GFOof6t4yR"});
// invokeAction({ action: "remove", id: "WjKmkoUUGODlROrGcj8k4" });

//? step 2: yargs

const argv = require("yargs").argv; //* variant 1

// const yargs = require("yargs"); //* variant 2
// const { hideBin } = require("yargs/helpers"); //* variant 2

const people = require("./contacts");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await people.listContacts();
      console.log(allContacts);
      break;

    case "get":
      // ... id
      const oneContact = await people.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      const newContact = await people.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await people.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// const arr = hideBin(process.argv); //* variant 2
// const { argv } = yargs(arr); //* variant 2
console.log(argv);
invokeAction(argv);

//? step 3: commander
// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторити
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
