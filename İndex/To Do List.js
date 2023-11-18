function listItemAdd() {
    let ulObject = document.querySelector("ul#listToDo");
    let text = document.querySelector("#txtBox").value;

    let liObject = document.createElement("li");
    liObject.innerHTML = `
        <div class="row mt-2">
            <label class="col-10">${text}</label>
            <button class="col-1 btn btn-danger" onclick="deleteItem(this.parentNode.parentNode)">Sil</button>
        </div>`;

    ulObject.appendChild(liObject);
}



let btnAdd = document.querySelector("#btnAdd")
btnAdd.addEventListener("click",listItemAdd)


function deleteItem(item) {
    item.remove(); 
}