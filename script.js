const input = document.getElementById('textbox');

const completeItem = (e) => {
    let currentItem = e.target;
   
    currentItem.classList.toggle("done"); 
}

const createTodoListItem = (todo) => { 
    const todoListItem = document.createElement('li');
    todoListItem.textContent = todo.text;

    todoListItem.addEventListener("click", e => { 
        completeItem(e); 
    })

    return todoListItem; 
}


const createDeleteButton = (todo, todoDiv) => { 
    const deleteButton = document.createElement('span');
    deleteButton.className = 'x';
    deleteButton.innerHTML = "";

    deleteButton.addEventListener('click', () => { 
        todoDiv.remove(); 
    })


    return deleteButton; 
}

const  addTodo = () => {    
    const currentItemsList = document.getElementById('current-items');   
    const todoDiv = document.createElement('div');
    todoDiv.className = 'current-list-item';
    
    const todo = { 
        id: Math.random(), 
        text: input.value, 
        isCompleted: false, 
    }

    const todoListItem = createTodoListItem(todo); 
    const deleteButton = createDeleteButton(todo, todoDiv);


       todoDiv.appendChild(todoListItem);
       todoDiv.appendChild(deleteButton);
       currentItemsList.appendChild(todoDiv);
    
    

       input.value = "";
       input.focus();
    }


document.getElementById("add-button")
.addEventListener('click', addTodo);

document.addEventListener("keydown", e => { 
    if (e.key === "Enter" && input.value != "") {
        e.preventDefault();
        addTodo();
    }
})




document.getElementById("clear-button")
.addEventListener('click', () => { 
    document.getElementById('current-items').innerHTML = '';   
});