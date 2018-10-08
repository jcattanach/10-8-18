let getToDoInput = document.getElementById("ToDoInput")

let submitButton = document.getElementById("submitButton")

let pendingList = document.getElementById("pending-tasks")

let completedList = document.getElementById("completed-tasks")


submitButton.addEventListener('click',function(){
  let listItem = document.createElement("li")
  let toDoItem = getToDoInput.value

  let checkTask = document.createElement("input")
  checkTask.type = "checkbox"



  pendingList.appendChild(listItem)
  // listItem.appendChild(checkTask)
  listItem.innerHTML = toDoItem
  listItem.className = "todo-item"

  listItem.appendChild(checkTask)

  let deleteButton = document.createElement("button")
  deleteButton.innerHTML = "Remove item"
  deleteButton.addEventListener("click", function(){
    pendingList.removeChild(this.parentElement)
  })

  listItem.appendChild(deleteButton)


  checkTask.addEventListener("change", function(){
    pendingList.removeChild(this.parentElement)
    completedList.appendChild(this.parentElement)

  })
})
