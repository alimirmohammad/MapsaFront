let todos = [];

function addTodo(title) {
    const newTodoTitle = document.getElementById('new_todo').value;
    document.getElementById('new_todo').value = '';

    todos.unshift(
        {
            title: newTodoTitle,
            checked: false,
            uuid: uuidv1()
        }
    );
    render();
}

function toggleCheck(uuid) {
    todos.forEach(todo => {
        if(todo.uuid === uuid){
            todo.checked = !todo.checked;
        }
    })
    render()
}

function render() {
    let htmlP = '';
    let htmlD = '';
    todos.filter(todo => {
        return !todo.checked
    }).forEach(todo => {
        htmlP += `
            <li><input type="checkbox" onclick="toggleCheck(${todo.uuid})"}> ${todo.title}</li>
        `;
    });
    todos.filter(todo => {
        return todo.checked
        }).forEach(todo => {
        htmlD += `
            <li><input type="checkbox" onclick="toggleCheck(${todo.uuid})" checked> ${todo.title}</li>
        `;
    });
    document.getElementById('pending').innerHTML = htmlP;
    document.getElementById('done').innerHTML = htmlD;
}