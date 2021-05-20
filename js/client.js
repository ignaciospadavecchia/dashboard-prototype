
    const endpointItems="https://modulojs.herokuapp.com/items";  
    const endpointStore="https://modulojs.herokuapp.com/stores";  

    /**
     * 
     * @param {*} storeId  id que identifica a una tienda emparticular
     * @param {*} callback funcion que se llamara cuando los datos estan recuperados. 
     */
    async function  getStore(storeId,callback){
        const response = await fetch(`${endpointStore}/${storeId}`); 
        const store = await response.json(); 
        callback(store);   
    }


    async function  getListItems(callback){
        const response = await fetch(endpointItems); 
        const list = await response.json(); 
        callback(list);   
    }

   
    /**
     * Ejemplo item
     * {
        id: 4,
        name: "Item De prueba",
        description: "Descripcion del producto",
        price: "12",
        status: "Stock",
        image: null,
        store: 2
        }
     * Inserta un item 
     * @param {*} data  el item a insertar
     * @param {*} callback funcion que se llamara cuando se ha insertado. 
     */
    async function postItem(data,callback) {
        // Default options are marked with *
        const response = await fetch(endpointItems, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const result= await response.json(); 
        callback(result); 
    }

    /**
     * Elimina un item para siempre
     * @param {*} itemId el ID del item a eliminar
     * @param {*} callback funcion que se llamara cuando de ha eliminado el item. 
     */
    async function deleteItem(itemId,callback) {
        // Default options are marked with *
        const response = await fetch(`${endpointItems}/${itemId}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result= await response.json(); 
        callback(result); 
    }


    async function updateItem(item,callback) {
        // Default options are marked with *
        const response = await fetch(`${endpointItems}/${item.id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(item) // body data type must match "Content-Type" header
        });
        const result= await response.json();
        callback(result);
    }

    function findItemById(list,id){
        return list.find(element => element.id == id); 
    }
     




