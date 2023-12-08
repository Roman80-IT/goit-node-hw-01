const people = require("./contacts");
// console.log(people);

const invokeAction = async ({ action }) => {
  switch (action) {
    case "read":
      const allContacts = await people.listContacts();
      return console.log(allContacts);
  }
};

invokeAction({ action: "read" });
