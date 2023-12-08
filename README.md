# goit-node-hw-01

## Cкріншоти виконання команд

## Крок 1 - Встановлення пакета **nodemon**

1. Ініціалізовано проєкт (створення `package.json`)
   за допомогою команди [`npm init`](./slides/1-1-init-package.json.jpg)
   `npm init -y` - створення по замовчуванню
   `clear` - очистка терміналу

2. Створено файл `index.js` в корені проєкту

3. Встановлено пакет **nodemon** як залежність розробки (`devDependencies`)

4. В файлі `package.json` додано "скрипти" для запуску `index.js`
   -- Скрипт `start`, який запускає `index.js` за допомогою `node`
   -- Скрипт `dev`, який запускає `index.js` за допомогою `nodemon`

   Пояснення з конспекту (module 2):

> Тепер для режиму розробки ми встановимо пакет `nodemon`.
> Він дозволяє виконувати live reload сервера під час розробки. Додамо необхідну залежність
>
> ```
> npm i nodemon -D
> ```
>
> Потім у файлі `package.json` для запуску застосунку в режимі розробки додамо скрипт `start:dev`
>
> ```
> "scripts": {
> "start": "node ./bin/www",
> "start:dev": "nodemon ./bin/www"
> },
> ```
>
> І запуск застосунку в режимі розробки буде наступним
>
> ```
> npm run start:dev
> ```

[Приклад](./slides/1-2-npm-run-start_dev.jpg)

## Крок 2 - Робота з файлами

1. Cтворено папку `db`.

2. Для зберігання контактів завантажено в проект файл `contacts.json` (в папці `db`).

3. У корені проєкту створено файл `contacts.js`.

4. Зроблено імпорт модулів **fs** (у версії, яка працює з промісами `- fs/promises`) і **path** для роботи з файловою системою.

```js
const fs = require("fs/promises");
```

5. Створено змінну `contactsPath`, і в ній шлях до файлу `contacts.json`.

```js
const contactsPath = require("./db/contacts.json");
```

Шлях має бути не відносний, а абсолютний, тому для складання шляху використамо методи модуля **path**:

```js
const path = require("path"); // імпортуємо `path`
// const { dirname } = require("path");     // або так

const contactsPath = path.join(__dirname, "db/contacts.json");
```

Додай функції для роботи з колекцією контактів.

У функціях використовуй модуль **fs** та його методи `readFile()` і `writeFile()`.

```js
// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
```
