const list = document.querySelector('#todo-list')
const input = document.querySelector('#todo-input')

const addToDo = () => {
    value = input.value
    if(value.trim() === ''){
        alert('Cannot enter empty to-do')
        return
    }
    const element = document.createElement('li')
    element.classList.add('todo-li')
    element.innerHTML = input.value
    element.onclick = function() {
        this.remove()
    }
    list.appendChild(element)
}