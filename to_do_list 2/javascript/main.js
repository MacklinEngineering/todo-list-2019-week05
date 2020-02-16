//Created with Miggie, Finesse, Nyah, Jessie, Shane, Sebastian:

//The entire team came up with this code together. Editing each portion, adding, etc. 
// The below is the result of that collaboration.

document.getElementById("addButton").addEventListener("click", addNewLi);

const ul = document.getElementById("list");
const clear = document.getElementById("clearList");
let done = 0;
const clearCompleted = document.getElementById("clearCompleted");

function addNewLi(){
  let addToList = document.getElementById('addToList').value;
  let li = document.createElement('LI');
  li.addEventListener('click', (e) => {
    let x = event.target;
    x.style.textDecoration = "line-through";
  updateCounter();
  })
  let newLi = document.createTextNode(addToList);

  li.appendChild(newLi);
  ul.appendChild(li);
}

/*Chris helped us with this function.
The counter increases by one when the user clicks an li they completed.*/

function updateCounter(){
  done++;
let span = document.getElementById("doneCount");
console.log("span is " + span);
span.innerHTML=done;
console.log(done + "update counter");
}

//We did this portion as a group with Nick's help

clearCompleted.addEventListener("click", function(){
  const allLi = document.querySelectorAll("li");

  for(let i = 0; i < allLi.length; i++){

    if(allLi[i].style.textDecoration === "line-through" ){
      console.log(allLi[i])
      ul.removeChild(allLi[i])
    }
  }
})

//Shey worked with Sebastian on this portion and he explained it to my group the following day.

clear.addEventListener("click", () => {
  const li = document.querySelectorAll("LI");
  for(let i = 0; i < li.length; i++){
    ul.removeChild(li[i]);
}
})

/*We looked at previous assignments to help build these functions
 and on the internet (Stack Over Flow, MDN, etc.).*/
