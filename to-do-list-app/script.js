const listContainer = document.getElementById("list-container");

function update() {
  let task = document.querySelector(".input-bar").value;
  console.log(task);
  if (task === '') {
    alert("You must write something");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = task;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  document.querySelector(".input-bar").value = "";
  saveData();

}
const add = document.querySelector(".input-button");
add.addEventListener("click",()=>{
  update();
})

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();