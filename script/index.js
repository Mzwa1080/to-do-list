let tasks = [];

function addTask() {
    let input = document.getElementById('taskInput');
    let taskName = input.value.trim();

    if (taskName.length === 0 || taskName.length <= 3) {
        alert('Task must not be empty or have less than 3 characters.');
    }

    let capitalizedTask = taskName.charAt(0).toUpperCase() + taskName.slice(1);
    // console.log(capitalizedTask);
    document.getElementById('taskList').innerText = capitalizedTask 

    let addedTask = {
        id: tasks.length + 1,
        name: capitalizedTask,
        createdDate: new Date().toDateString(),
        completed : false
    };
    // console.log(addedTask); //Lets check out addedTask add if there are things there
    tasks.push(addedTask);
    //   Then we clear out input 
    input.value = '';

      getTasks();
}

document.querySelector('[btn-add]').addEventListener('click', addTask)


function getTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(addedTask => {

    let listItem = document.createElement('li');
    listItem.innerText = addedTask.name + '  Date created: ' + addedTask.createdDate;


    if (addedTask.completed) {
      listItem.classList.add('completed');
    }
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = addedTask.completed;


    checkbox.addEventListener('change', () => toggleTaskCompletion(addedTask.id));
    listItem.prepend(checkbox);
    taskList.appendChild(listItem);
  });
}

// I NEED TO DO THE LOCALSTORAGE 




