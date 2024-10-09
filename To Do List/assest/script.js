let input = document.querySelector(".enterend-list")
let addBtn = document.querySelector(".add-list")
let tasks = document.querySelector(".tasks")


// btn working 
input.addEventListener('keyup', ()=>{
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active')
    }
})

// add new task 
addBtn.addEventListener('click', ()=> {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div')
        newItem.classList.add('item-block')
        newItem.innerHTML =`
            <p>${input.value}</p>
                <div class="item-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        tasks.appendChild(newItem)
        input.value= '';
    } else {
        alert('Please enter a Task')
    }
})

// delete task
tasks.addEventListener('click', (e)=> {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove()
    } 
})


// work done with toggle btn 
tasks.addEventListener('click', (e)=> {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed')
    } 
})