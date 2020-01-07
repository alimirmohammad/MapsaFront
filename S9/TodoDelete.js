let todos = [];

function setStorage(arr) {
    localStorage.setItem('todos', JSON.stringify(arr));
}

function getStorage() {
    let items = localStorage.getItem('todos');
    if(items)
        todos = JSON.parse(items);
}

function addTodo(title) {
    const newTodoTitle = document.getElementById('new_todo').value;
    document.getElementById('new_todo').value = '';

    todos.unshift(
        {
            title: newTodoTitle,
            checked: false,
            trash: false
        }
    );
    setStorage(todos);
    render();
}

function toggleCheck(index) {
    todos[index].checked = !todos[index].checked;
    setStorage(todos);
    render();
}

function toggleTrash(index) {
    todos[index].trash = !todos[index].trash;

    setStorage(todos);
    render();
}

function render() {
    let htmlP = '';
    let htmlD = '';
    let htmlT = '';
    todos.filter((todo, index) => {
        if(todo.trash){
            htmlT += `
            <li><input type="checkbox" onclick="toggleCheck(${index})" ${todo.checked ? 'checked' : ''}}> ${todo.title} <button onclick="toggleTrash(${index})"><i class="fas fa-trash-restore"></i></button></li>
        `;
        }
        else if(!todo.checked){
            htmlP += `
            <li><input type="checkbox" onclick="toggleCheck(${index})"}> ${todo.title} <button onclick="toggleTrash(${index})"><i class="fas fa-trash-alt"></i></button></li>
        `;

        } else {
            htmlD += `
            <li><input type="checkbox" onclick="toggleCheck(${index})" checked> ${todo.title} <button onclick="toggleTrash(${index})"><i class="fas fa-trash-alt"></i></button></li>
        `;
        }
    });
    document.getElementById('pending').innerHTML = htmlP;
    document.getElementById('done').innerHTML = htmlD;
    document.getElementById('trash').innerHTML = htmlT;
}

function init() {
    getStorage();
    render();
}

init();