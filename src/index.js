const express = require('express');
const { taskStore } = require('./store');
const { calculateTotal } = require('./calc');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Student Task Manager API is running.');
});

app.get('/api/tasks', (req, res) => {
  res.json(taskStore.all());
});

app.post('/api/tasks', (req, res) => {
  const task = taskStore.add(req.body);
  res.status(201).json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  taskStore.remove(req.params.id);
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on http://localhost:' + PORT);
});
