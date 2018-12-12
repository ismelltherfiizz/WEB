
function handleConnectionChange(event){
    if(event.type == "offline"){
        console.log("- connection.");
    }
    if(event.type == "online"){
        console.log("+ connection.");
        var data = getAllItems();
        //send data to server
        deleteAllItems();
    }
}

window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);


function addItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// function getItems(callback) {
// function getItems() {
//     var arr = [];
//     for (var i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var item = JSON.parse(localStorage[key]);
//         arr.push(item);
//     }
//     // callback(arr);
// }


function getItem(key) {
    // var arr = [];
    // for (var i = 0; i < localStorage.length; i++) {
        // localStorage.getItem(key);
        // var item = JSON.parse(localStorage.getItem(key));
    //     arr.push(item);
    // }
    // return arr;


    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

function getAllItems() {
    var array = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage[key]);
            array.push(item);
        }
    return array;

}

// function deleteItem(key) {
//     localStorage.removeItem(key);
// }
function deleteAllItems() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        localStorage.removeItem(key);
    }
}