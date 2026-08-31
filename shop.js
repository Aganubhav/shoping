const nameInput = document.querySelector('#itemName');
const qtyInput=  document.querySelector('#itemQty');
const mainContainer = document.querySelector('.mainContainer');
const form = document.querySelector('form');
const itemCount= document.querySelector('#itemCount');
let items=[];
form.addEventListener('submit', function(event) {
    event.preventDefault()

    let item = {
        name: nameInput.value,
        quantity: qtyInput.value
    }

    items.push(item)
    
    displayItems()
    form.reset()
})
function displayItems() {
    mainContainer.innerHTML = "";

    items.forEach((item, index) => {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("smallCard");
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("itemInfo");
        const namePara = document.createElement("p");
        namePara.classList.add("itemNameText");
        namePara.textContent = item.name;
        const qtyPara = document.createElement("p");
        qtyPara.textContent = `Quantity : ${item.quantity}`;
        infoDiv.append(namePara, qtyPara);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteTodo");
        deleteBtn.addEventListener('click', function() {
            deleteItem(index);
        });
        mainDiv.append(infoDiv, deleteBtn);
        mainContainer.appendChild(mainDiv);
    });
    itemCount.textContent = items.length;
}
function deleteItem(index) {
    items.splice(index, 1)
    displayItems()
}
