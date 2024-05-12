document.addEventListener('DOMContentLoaded', function() {
    const totalTasksCount = document.getElementById('total-count');
    const completedTasksCount = document.getElementById('completed-count');
    const uncompletedTasksCount = document.getElementById('uncompleted-count');
    const checkboxes = document.querySelectorAll('.checkbox');

    totalTasksCount.textContent = checkboxes.length;

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                completedTasksCount.textContent = parseInt(completedTasksCount.textContent) + 1;
            } else {
                completedTasksCount.textContent = parseInt(completedTasksCount.textContent) - 1;
            }
            uncompletedTasksCount.textContent = parseInt(totalTasksCount.textContent) - parseInt(completedTasksCount.textContent);
        });
    });
});