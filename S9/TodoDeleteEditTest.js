let todos = [];
let i = 1;

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
            trash: false,
            counter: i
        }
    );
    setStorage(todos);
    render();
    i++;
}

function toggleCheck(index) {
    todos.map(todo => {
        if(todo.counter === index)
            todo.checked = !todo.checked;
        return todo;
    });

    setStorage(todos);
    render();
}

function toggleTrash(index) {
    todos.map(todo => {
        if(todo.counter === index)
            todo.trash = !todo.trash;
        return todo;
    });


    setStorage(todos);
    render();
}

function render() {
    let htmlP = '';
    let htmlD = '';
    let htmlT = '';
    todos.filter((todo) => {
        if (todo.trash)
            return todo;
    }).forEach(todo => {
        htmlT += `
            <li>
                <input type="checkbox" onclick="toggleCheck(${todo.counter})" ${todo.checked ? 'checked' : ''}}> ${todo.title} 
                <button onclick="toggleTrash(${todo.counter})">
                    <i class="fas fa-trash-restore"></i>
                </button>
            </li>
        `;
    });

    todos.filter((todo) => {
        if (!todo.trash && !todo.checked)
            return todo;
    }).forEach(todo => {
        htmlP += `
            <li>
                <input type="checkbox" onclick="toggleCheck(${todo.counter})"}> ${todo.title} 
                <button onclick="toggleTrash(${todo.counter})">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button onclick="edit(${todo.counter})">
                    <i class="fas fa-edit"></i>
                </button>
                <div id="edit-form-${todo.counter}" class="edit-form">
                    <input id="edit-input-${todo.counter}" type="text">
                    <button onclick="submitEdit(${todo.counter})">Confirm</button>
                </div>
            </li>
        `;
    });

    todos.filter((todo) => {
        if (!todo.trash && todo.checked)
            return todo;
    }).forEach(todo => {
        htmlD += `
            <li>
                <input type="checkbox" onclick="toggleCheck(${todo.counter})" checked> ${todo.title} 
                <button onclick="toggleTrash(${todo.counter})">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button onclick="edit(${todo.counter})">
                    <i class="fas fa-edit"></i>
                </button>
                <div id="edit-form-${todo.counter}" class="edit-form">
                    <input id="edit-input-${todo.counter}" type="text">
                    <button onclick="submitEdit(${todo.counter})">Confirm</button>
                </div>
            </li>
        `;
    });

    document.getElementById('pending').innerHTML = htmlP;
    document.getElementById('done').innerHTML = htmlD;
    document.getElementById('trash').innerHTML = htmlT;
}

function edit(index) {
    todos.forEach(todo => {
        if(todo.counter === index){
            const editForm = document.getElementById(`edit-form-${index}`);
            editForm.style.display = 'block';
            const editInput = document.getElementById(`edit-input-${index}`);
            editInput.value = todo.title;
        }
    });

}

function submitEdit(index) {
    todos.forEach(todo => {
        if(todo.counter === index){
            const editInput = document.getElementById(`edit-input-${index}`);
            todo.title = editInput.value;
            setStorage(todos);
            render();
        }
    });

}

function init() {
    getStorage();
    render();
}

init();