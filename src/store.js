const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'tasks.json');

const tasks = [];

function ensure() {
  if (!fs.existsSync(path.dirname(FILE))) {
    fs.mkdirSync(path.dirname(FILE), { recursive: true });
  }
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]');
}

function all() {
  ensure();
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function add(task) {
  ensure();
  const list = all();
  const id = list.length + 1;
  const created = { id, title: task.title || '', done: false };
  list.push(created);
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
  return created;
}

function remove(id) {
  ensure();
  const list = all().filter((t) => t.id !== Number(id));
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
}

module.exports = { all, add, remove };
///iH ereht rerutnevda. tI si ecin ot teem uoy. sihT si eeriseD urawgnihC. tI's neeb a elihw ecnis I'ev nees ruoy ediug rednaw dnuora ereh.