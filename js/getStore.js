let myStoreId = 4;
/* let listItems = ; */
/* let item = "" ; */
getStore(myStoreId, onStoreData);
console.log("cargando datos")

/** Esta funcion sirve para controlar el evento  de getStore, note que debe definirce un parametro */
function onStoreData(store) {
    console.log("Restultado: ", store)
}

/*********** Eventos callback **********/
// onGETSTORE
function onGetStore(store) {
    console.log("Full Store:", store);
    listId = store.id;
    listName = store.name;
    listAddress = store.address;
    listDescription = store.Description;
    listImage = store.image;
    listItems = store.items;
    document.getElementById("storeNameId").innerHTML = listName;
    document.getElementById("storeAddressId").innerHTML = listAddress;
    createListHTML(listItems, "tableId");
}

// onPOST
function onPostItem(item) {
    console.log("onpostItem:", item);
    getStore(myStoreId, onGetStore);
}

// onUPDATEd
function onUpdatedItem(item) {
    console.log("item updated:", item);
    getStore(myStoreId, onGetStore);
}

// onDELETE
function onDeleteItem(item) {
    console.log("item deleted:", item);
    getStore(myStoreId, onGetStore);
}

// onINSERTed
function onInsertedItem(item) {
    console.log("El item ha sido insertado: ", item)
}

/********** Eventos UI  ******************/

// onClickINSERT
function onClickInsert(itemId) {
    const data = { // Hardcode item, just for test
        store: 4, // Inserte solo en su store
        name: "Pedro",
        price: "10",
        status: "Stock",
        description: "Canoero"
    }
    postItem(data, onPostItem);
    console.log("insertando un item...");
}

// onClickDELETE
function onClickDelete(itemId) {
    /* const item = findItemById(listItems,id);  */
    console.log("Deleting...", itemId);
    deleteItem(itemId, onDeleteItem);
}

// onClickUPDATE
function onClickUpdate(id) {
    console.log("updating...", id);
    const item = findItemById(listItems, id);
    console.log("updating...", item);
    item.name = prompt("Ingrese un nombre:", " ");
    item.description = prompt("Ingrese una descripción:", " ");
    updateItem(item, onUpdatedItem);
}
/********** Functions   ******************/

function createListHTML(list, tableId) {
    const listDiv = document.getElementById(tableId);
    listDiv.innerHTML =
        `
        <thead>
        <tr>
            <th>Id</th>
            <th>Tarea</th>
            <th>Descripción</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>

`;
    for (let i = 0; i < list.length; i++) {
        console.log("item i:", list[i]);
        let itemHtml = createItemHTML(list[i]);
        listDiv.innerHTML += itemHtml;
    }
}

function createItemHTML(item) {
    const htmlItem =
        `
    <tbody>
        <tr>
            <td>#</td>
            <td id="td-1">${item.name}</td>
            <td id="td-2">${item.description}</td>
            <td id="td-3">${item.price}</td>
            <td id="td-3">${item.status}</td>
            <td>${item.image}</td>
            <td>${item.store}</td>
            <td>
                <input type="button" value="➕" onclick="onClickInsert(${item.id})">
                <input type="button" value="🖊️" onclick="onClickUpdate(${item.id})">
                <input type="button" value="➖" onclick="onClickDelete(${item.id})">
            </td>
        </tr>
    </tbody>
    
    `;
    return htmlItem;
}


function onShowWindow() {
    window.open("editStore.html");
}