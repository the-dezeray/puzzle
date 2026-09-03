function TaskRow({ task, onToggle }) {
  const el = document.createElement('li');
  el.className = 'task-row';
  el.textContent = task.title;
  el.onclick = () => onToggle(task.id);
  if (task.done) el.classList.add('done');
  return el;
}

module.exports = { TaskRow };
