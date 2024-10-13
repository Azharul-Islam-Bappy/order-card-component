
// Initialize tasks array
let tasks = [];
let taskObject; // Declare taskObject outside the event listener

AddTask.addEventListener('click', function() {
  // ... (your existing code to create task and delete button)

  // Generate a unique ID for the task
  const taskId = Date.now();

  // Create a task object
  taskObject = { id: taskId, text: InputTask.value };

  // Add the task object to the tasks array
  tasks.push(taskObject);

  // Update localStorage with the updated tasks array
  localStorage.setItem('Tasks', JSON.stringify(tasks));

  // ... (your code to display the task)
});

function showTasks() {
  // Retrieve tasks from localStorage
  const storedTasks = JSON.parse(localStorage.getItem('Tasks'));

  if (storedTasks) {
    // Clear the current task list
    TaskContainer.innerHTML = '';

    // Populate the task list based on stored tasks
    storedTasks.forEach(function(taskObject) {
      const task = document.createElement('li');
      task.innerText = taskObject.text;

      const deleteTask = document.createElement('button');
      deleteTask.innerText = 'Delete';

      // Set the data-task-id attribute on deleteTask
      deleteTask.setAttribute('data-task-id', taskObject.id);

      // Add the delete button
      task.appendChild(deleteTask);

      // Add the task to the task list
      TaskContainer.appendChild(task);

      deleteTask.addEventListener('click', function(e) {
        const taskId = e.target.getAttribute('data-task-id');

        // Remove the task object from the tasks array
        tasks = tasks.filter(function(task) {
          return taskObject.id !== taskId;
        });

        // Update localStorage with the updated tasks array
        localStorage.setItem('Tasks', JSON.stringify(tasks));

        // Remove the task from the UI
        task.remove();
      });
    });
  }
}

// Call showTasks to display tasks from localStorage when the page

