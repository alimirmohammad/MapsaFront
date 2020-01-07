let todos = [];

function addTodo(title) {
    const newTodoTitle = document.getElementById('new_todo').value;
    document.getElementById('new_todo').value = '';

    todos.unshift(
        {
            title: newTodoTitle,
            checked: false
        }
    );
    render();
}

function toggleCheck(index) {
    todos[index].checked = !todos[index].checked;
    render();
}

function render() {
    let htmlP = '';
    let htmlD = '';
    todos.filter((todo, index) => {
        if(!todo.checked){
        htmlP += `
            <li><input type="checkbox" onclick="toggleCheck(${index})"}> ${todo.title}</li>
        `;

        } else {
        htmlD += `
            <li><input type="checkbox" onclick="toggleCheck(${index})" checked> ${todo.title}</li>
        `;
        }
    });
    document.getElementById('pending').innerHTML = htmlP;
    document.getElementById('done').innerHTML = htmlD;
}