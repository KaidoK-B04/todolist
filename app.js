    let inputField = document.getElementById('inputField');
    let addToDobutton = document.getElementById('addToDo');
    let toDoContainer = document.getElementById('toDoContainer');
    


    // Load existing todos from localStorage when the page loads
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todoText => {
      addTodoElement(todoText);
    });


    addToDobutton.addEventListener('click', function(){
      const todoText = inputField.value;
      if (todoText.trim() !== '') {
        addTodoElement(todoText);
        inputField.value = "";

        // Save updated todos to localStorage
        saveTodosToLocalStorage();
      }
    });

    // Element and styling
    
    function addTodoElement(todoText) {
      const div = document.createElement('div');
      div.classList.add("div-styling");
      const paragraph = document.createElement('p');
      const button = document.createElement('button');
      button.classList.add("button-styling");
      button.classList.add("fa");
      button.classList.add("fa-minus-square-o");
      paragraph.classList.add('paragraph-styling');
      paragraph.innerText = todoText;

      toDoContainer.append(div);
      div.append(paragraph, button);

      paragraph.addEventListener('click', function(){
        if (paragraph.style.textDecoration === "line-through"){
          paragraph.style.textDecoration = "";
        } else {
          paragraph.style.textDecoration = "line-through";
        }

        // saveTodosToLocalStorage();
      });

      button.addEventListener('click', function(){
        toDoContainer.removeChild(div);

        // Remove todo from savedTodos array and update localStorage
        savedTodos.splice(savedTodos.indexOf(todoText), 1);
        // saveTodosToLocalStorage();
      });

      // Add todo to savedTodos array and update localStorage
      savedTodos.push(todoText);

      // Clear
      localStorage.clear()
      saveTodosToLocalStorage();
    }

    // set todos to localStorage
    function saveTodosToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(savedTodos));
    }


