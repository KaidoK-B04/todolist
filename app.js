let inputField = document.getElementById('inputField');
let addToDobutton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDobutton.addEventListener('click', function(){
  const div = document.createElement('div');
  div.classList.add("div-styling")
  const paragraph = document.createElement('p');
  const button = document.createElement('button');
  button.classList.add("button-styling");
  button.classList.add("fa");
  button.classList.add("fa-minus-square-o");
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  
  toDoContainer.append(div)
  div.append(paragraph, button);
  inputField.value = "";
  paragraph.addEventListener('click', function(){
    if (paragraph.style.textDecoration === "line-through"){
      paragraph.style.textDecoration = "";
    } else {
      paragraph.style.textDecoration = "line-through";
    }
  })
  button.addEventListener('click', function(){
    toDoContainer.removeChild(div);
  })
})