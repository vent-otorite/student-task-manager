 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const taskTitleInput = document.querySelector('input[placeholder="Task Title"]');
    const taskDescInput = document.querySelector('textarea[placeholder="Task Description"]');
    const addButton = document.querySelector('button');

    // Create a container to hold dynamically added tasks if not already present
    let taskListContainer = document.getElementById('task-list');
    if (!taskListContainer) {
        taskListContainer = document.createElement('div');
        taskListContainer.id = 'task-list';
        document.body.appendChild(taskListContainer);
    }

    // Add task functionality
    addButton.addEventListener('click', () => {
        const title = taskTitleInput.value.trim();
        const description = taskDescInput.value.trim();

        if (title === "") {
            alert("Please enter a task title!");
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.style.cssText = "background: #fff; padding: 10px; margin-top: 10px; border: 1px solid #ddd; border-radius: 4px;";
        
        taskItem.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
        taskListContainer.appendChild(taskItem);

        // Clear inputs
        taskTitleInput.value = "";
        taskDescInput.value = "";
    });

    // Task search functionality for Task 26
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const tasks = document.querySelectorAll('.task-item');
            
            tasks.forEach(task => {
                const text = task.textContent.toLowerCase();
                task.style.display = text.includes(term) ? 'block' : 'none';
            });
        });
    }
});