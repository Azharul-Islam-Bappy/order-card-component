
// creating a to do list Web Page.


const InputTask = document.querySelector('#addTask');
const  AddTask = document.querySelector('#addTask-Button');
let  TaskContainer = document.querySelector('#task-list');

let storeTasks = [];
let taskObject;


AddTask.addEventListener('click', function() {
  let task = document.createElement('li');
  let deleteTask = document.createElement('button');
  
  const taskId = Date.now(); // generating unique id for task
  taskObject = { id: taskId, text: InputTask.value}; // create a task object
  storeTasks.push(taskObject); // adding the object to storeTasks array 
  
  localStorage.setItem("Tasks",JSON.
  stringify(storeTasks)); // updating the localStorage with the updated array 
  
  deleteTask.innerText = 'Delete';
  task.innerText = InputTask.value;
  InputTask.value = '';
  
  
  task.appendChild(deleteTask);
  TaskContainer.appendChild(task);
  
});

function showTask() {
  const storedTasks = JSON.parse(localStorage.getItem("Tasks")); // Retrive task from localStorage
  
  if (storedTasks) {
    TaskContainer.innerHTML = ''; // clear the current task list
    
    // populate the task list based on storedTasks
    storedTasks.forEach(function (taskObject) {
      const task = document.createElement('li');
      task.innerText = taskObject.text;
      
      const deleteTask = document.createElement('button');
      deleteTask.innerText = 'Delete';
      
      deleteTask.setAttribute('data-task-id',taskObject.id);
      
      task.appendChild(deleteTask);
      TaskContainer.appendChild(task);
      
      deleteTask.addEventListener('click',function (e) {
        const taskId = e.target.getAttribute('data-task-id');
        
        storeTasks = storeTasks.filter(function(task) {
          return taskObject.id !== taskId;
        }); // remove the task from array
        
        localStorage.setItem("Tasks", JSON.stringify(storeTasks)); // updating localStorage with updated array
          
        task.remove(); // remove the task from  TaskContainer
      });
      
    });
  }
}

showTask();