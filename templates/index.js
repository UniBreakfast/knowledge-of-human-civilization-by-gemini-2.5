const fs = require('fs');

const folderNames = [
'c-1-symbolism',
'c-2-language',
'c-3-symbolic-thought',
'i-1-complex-communication',
'i-2-abstract-thinking',
'i-3-enhanced-cooperation',
'i-4-knowledge-transmission',
'i-5-planning-future-orientation',
'i-6-structuring-consciousness',
]

for (const folderName of folderNames) {
  fs.mkdirSync(__dirname + '/' + folderName);
}
