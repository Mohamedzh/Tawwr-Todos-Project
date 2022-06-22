const b1 = document.getElementById("b1");
const list = document.getElementById("tasklist")
let listarray;


b1.addEventListener('click', todos);

//retrive from local storage
localstore();
function localstore(){
    if (localStorage.getItem("mylist")===null){
listarray = [];}else{
    listarray = JSON.parse(localStorage.getItem("mylist"));
    let i=0;
    while (i < listarray.length){

        
            list.innerHTML += `<li class="entryli" class="list-group-item active">${listarray[i]}
            <button type="button" id = "check"><i class="fa-solid fa-square-check"></i></button>
            <button type = "button" id = "del"><i class="fa-solid fa-trash-can"></i></button>
            </li>`;
            i += 1;
    };
    console.log(listarray);
}};

//The todos function
function todos(e) {
    e.preventDefault();
    var newtask = document.getElementById("task").value;
    if (newtask == "" || newtask == "Write your task here") {
        alert("Empty entry");
        document.getElementById("container").reset();
    } else {

var newTa = `<li class="entryli" class="list-group-item active">${newtask}
<button type="button" id = "check"><i class="fa-solid fa-square-check"></i></button>
<button type = "button" id = "del"><i class="fa-solid fa-trash-can"></i></button>
</li>`;
    list.innerHTML += newTa;
    listarray.push(newtask);
    localStorage.setItem('mylist', JSON.stringify(listarray));

    
    document.getElementById("container").reset();
    console.log(listarray);
}}

//Buttons

list.addEventListener('click', buttons);
function buttons(e){
    const item = e.target;

    if (item.id === 'check'){
        item.parentElement.classList.toggle("strike");
    };
    if (item.id === 'del'){
        item.parentElement.remove();
        let i = listarray.indexOf(item.parentElement.innerText);
        listarray.splice(i, 1);
        
        localStorage.setItem('mylist', JSON.stringify(listarray));
    }
}



    