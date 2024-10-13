// To-Do Project

const enterTask = document.querySelector("#enter-task");
const addTask = document.querySelector("#add-task");
let taskContainer = document.querySelector("#task-container");


let storeTasks = []; // an array
let taskObject; // will be used as an object 


addTask.addEventListener("click", () => {
  
  if(enterTask.value.length !== 0) {
    // This code block gonna handle with storing information
    
    const taskId = Date.now();
    
    taskObject = {
      id: taskId,
      text: enterTask.value
    }
    
    storeTasks = JSON.parse(localStorage.getItem("TASKS")) || [];
    
    storeTasks.push(taskObject);
    localStorage.setItem("TASKS", JSON.stringify(storeTasks));
    
    
    showTask();
    enterTask.value = '';
  } else {
    alert(" Please Enter Something "); //if there's noting inside the input field
  }
 
});

function showTask() { 
  // This function gonna handle with displaying the task 
  
  let storedTasks = JSON.parse(localStorage.getItem("TASKS"));
  
  if(storedTasks) {
    taskContainer.innerHTML = '';
    
    storedTasks.forEach((taskObject) => {
      const task = document.createElement('li');
      task.innerText = taskObject.text;
      
      const deleteTask = document.createElement('button');
      deleteTask.innerText = 'Delete';
      
      deleteTask.setAttribute("data-task-id", taskObject.id);
      
      task.appendChild(deleteTask);
      taskContainer.appendChild(task);
      
      deleteTask.addEventListener('click',(e) => {
        const taskId = e.target.getAttribute("data-task-id");
        
        storedTasks = storedTasks.filter((task) => task.id !== parseInt(taskId));
        
        
        localStorage.setItem("TASKS", JSON.stringify(storedTasks));
        
        task.remove();
      });
      
    });
  }
}

if(taskContainer.innerHTML === '') {
  
}
else{
  
}
showTask();