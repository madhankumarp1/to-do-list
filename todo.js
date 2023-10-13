// let button =document.getElementById('btn')  
// let input=document.getElementById('input1')
// let todolist =document.getElementById('todolist')
// let todos=[]

// button.addEventListener('click',()=>{
//     todos.push(input.value)
//     addtodo(input.value)
//     input.value=' '
// })
// function addtodo(todo){
//     let para=document.createElement('p')
//     para.innerText=input.value
//     todolist.appendChild(para)
// }



let button =document.querySelector('#btn')  
let input=document.querySelector('#input1')
let todolist =document.querySelector('#todolist')


btn.addEventListener("click", myfun)
function myfun() {
    if (input.value===""){
        alert("Enter a Text")
    }
    else{
        let value=document.createElement("div")

        let list =document.createElement("li")
        list.innerText=input.value;
        value.append(list)


        let delbtn = document.createElement("button")
        delbtn.innerText="delete"
          delbtn.addEventListener("click",del)
          function del(){
            delbtn.parentElement.remove()
          }
        value.append(delbtn)


        todolist.append(value)
        input.value = ""
    }
}