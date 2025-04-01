const fs = require('fs');

const folderNames = fs.readFileSync(__dirname + '/README.md', 'utf-8')
  .match(/(?<=\()[^\(]+(?=\/README\.md\))/g)
  .filter(name => name !== '..');

const readme = `[Back](../README.md)

---

**Prompt:** **

---

[Thinking process](thoughts.md)

---



---

[Back](../README.md)
`

const thoughts = `[Back](README.md)

---



---

[Back](README.md)
`

for (const folderName of folderNames) {
  fs.mkdirSync(__dirname + '/' + folderName);
  fs.writeFileSync(__dirname + '/' + folderName + '/README.md', readme);
  fs.writeFileSync(__dirname + '/' + folderName + '/thoughts.md', thoughts);
}
