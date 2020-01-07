let todos = [];

function addTodo(title) {
    const newTodoTitle = document.getElementById('new_todo').value;
    document.getElementById('new_todo').value = '';

    // todos.push({
    //     title: newTodoTitle,
    //     checked: false
    // });

    todos = [
        {
            title: newTodoTitle,
            checked: false
        },
        ...todos
    ];
    setStorage(todos);
    render();
}

function setStorage(arr) {
    localStorage.setItem('todos', JSON.stringify(arr));
}

function getStorage() {
    let items = localStorage.getItem('todos');
    if(items)
        todos = JSON.parse(items);
}

function render() {
    let html = '';
    todos.forEach((todo, index) => {
        html += `
            <li><input type="checkbox" onclick="toggleCheck(${index})" ${todo.checked ? 'checked' : ''}> ${todo.title}</li>
        `
    });
    document.getElementById('todos').innerHTML = html;
}

function toggleCheck(index) {
    todos[index].checked = !todos[index].checked;
    setStorage(todos);
}

function init() {
    getStorage();
    render();
}

init();