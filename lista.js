const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')
    const item = document.createElement('h2')
    item.classList.add('item')
    item.innerText = inputtdl.value.toLowerCase();
    itemall.appendChild(item)
    if (inputtdl.value === '') return
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<h2 class="fa-solid fa-trash">Borrar</h3>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)
    listtdl.appendChild(itemall)
    inputtdl.value = ''
}


function okdel(e) {
    const item = e.target
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)