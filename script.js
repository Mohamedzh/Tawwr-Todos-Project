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

        
            list.innerHTML += `<div><button type="button" id = "check"><i class="fa-solid fa-square-check"></i></button>
            <li class="entryli" class="list-group-item active">${listarray[i]}
            <button type = "button" id = "del"><i class="fa-solid fa-trash-can"></i></button>
            </li></div>`;
            i += 1;
    };
    console.log(listarray);
}};

//The todos function
function todos(e) {
    e.preventDefault();
    var newtask = document.getElementById("task").value;
    var newdate = document.getElementById("taskdate").value;
    if (newtask == "" ) {
        //Use || if conflict due to Placeholder
        alert("Empty entry");
        //document.getElementById("task").value=""; 
    } else if (newdate =="") {
        alert("Empty date");
    } else {

var newTa = `<div><button type="button" id = "check"><i class="fa-solid fa-square-check"></i></button>
<li class="entryli" class="list-group-item active">${newtask} on ${newdate}
<button type = "button" id = "del"><i class="fa-solid fa-trash-can"></i></button>
</li></div>`;
    list.innerHTML += newTa;
    var completetask = newtask +" on " + newdate
    listarray.push(completetask);
    localStorage.setItem('mylist', JSON.stringify(listarray));

    
    document.getElementById("task").value="";
    document.getElementById("taskdate").value="";

    console.log(listarray);
}}

//Buttons

list.addEventListener('click', buttons);
function buttons(e){
    const item = e.target;
    console.log(item.parentElement);
    if (item.id === 'check'){
        item.parentElement.classList.toggle("strike");
    };
    if (item.id === 'del'){
        (item.parentElement).parentElement.remove();
        let i = listarray.indexOf(item.parentElement.innerText);
        listarray.splice(i, 1);
        
        localStorage.setItem('mylist', JSON.stringify(listarray));
    }
}



    