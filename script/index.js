let tasks = [];

function addTask() {
  let input = document.getElementById('taskInput');
  let taskName = input.value.trim();
  console.log(taskName);
  let capitaLize = taskName.charAt(0).toUpperCase() + taskName.slice(1);
  
    let addedTask = {
      id: tasks.length + 1,
      name: capitaLize,
      createdDate: new Date().toDateString(),
      completed: false
    };

  if (taskName.length === 0 || taskName.length <= 3) {
    alert('Task must not be empty or have less than 3 words.');
  }
 // console.log(addedTask); //Lets check out addedTask add if there are things there
    tasks.push(addedTask);

  document.getElementById('taskList').innerText = capitaLize
// NOW LETS ADD IT TO LOCALSTORAGE
  localStoragee()
// Then we clear out input 
  input.value = '';


  getTasks();
}
//I will call this LocalStoragefunction when page refreshes and when adding tasks
function localStoragee() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// my btn
document.querySelector('[btn-add]').addEventListener('click', addTask)


function getTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(addedTask => {

    let listItem = document.createElement('li');
    listItem.innerHTML = `<span>${addedTask.name}</span> `;

    if (addedTask.completed) {
      listItem.classList.add('completed');
    }
// Lets create our checkbox and delete buttons
    let checkbox = document.createElement('input');
    let deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = addedTask.completed;
    deleteButton.textContent = 'Delete';
    
    listItem.prepend(checkbox);
    listItem.prepend(deleteButton)
    taskList.appendChild(listItem);
    deleteButton.addEventListener('click', () => deleteTask(addedTask.id));
    checkbox.addEventListener('change', () => toggleTaskCompletion(addedTask.id));
  });

// Joel also wanted the task to be striked through/linethrough thats styling in js
// So if addedTask.completed is true. strike though a line
if(addTask.completed){
  taskName.style.textDecoration = 'line-through';
 }


}

// This function must delete a selected item from the object, selected by id 
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  localStoragee();
  getTasks();
}


// Function to toggle task completion
function toggleTaskCompletion(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    getTasks(); // Update the tasks display
  }
}


// I NEED TO DO THE LOCALSTORAGE 



