// Query Selectors

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoDiv = document.querySelector('.todo-div');


// Functions

const addTask = () => {
  const taskDiv = document.createElement('div');
  const taskContent = document.createElement('p');
  const del = document.createElement('button');
  const completeBtn = document.createElement('button');
  
  taskContent.appendChild(document.createTextNode(todoInput.value));
  del.appendChild(document.createTextNode('X'));
  completeBtn.appendChild(document.createTextNode('\u2713'));
  
  taskDiv.classList.add('task')
  del.classList.add('del');
  completeBtn.classList.add('completeBtn');
  
  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(del);
  taskDiv.appendChild(completeBtn);
  
  todoDiv.appendChild(taskDiv);
  
  todoInput.value = '';
  
  del.addEventListener('click', function() {
    this.parentElement.classList.add('deleted');
    this.parentElement.addEventListener('transitionend', function() {this.remove()});
  });
  
  completeBtn.addEventListener('click', function() {
    this.parentElement.classList.toggle('completed');
  });
}


// Event Listeners

todoAdd.addEventListener('click', addTask);


// Test Input

const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

for (let t of tasks) {
  todoInput.value = t;
  addTask();
}