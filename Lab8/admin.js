'use strict'
function isOnline() {
    return window.navigator.onLine;
};
console.log('admin');

function saveData(obj) {
    localStorage.setItem('news', JSON.stringify(obj));
    var retrievedObject = JSON.parse(localStorage.getItem('news'));
    console.log('saved to local storage');
    console.log('news: ', retrievedObject);

};

function sendToServer(obj) {
    localStorage.setItem('news', JSON.stringify(obj));
    var retrievedObject = JSON.parse(localStorage.getItem('news'));
    console.log('saved to server');
    console.log('news: ', retrievedObject);

};

window.addEventListener('load', function() {

    function updateOnlineStatus(event) {
        if (event.type === 'online') {
            if (localStorage.getItem('news') === null) {
                console.log('no item to load')
            } else {
                var unsavedItem = localStorage.getItem('news');
                sendToServer(unsavedItem)
                localStorage.removeItem('news')
            }
        } else {

        };
    }

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});



//submission
var btn = document.getElementById('btn');
console.log(btn);
var title = document.getElementById('title');
console.log(title);
let newsBody = document.getElementById('news');
console.log(newsBody);

btn.onclick = function submitNews() {
    if (title.value != '' &&
        newsBody.value != '') {

          var titleText = title.value;
          var newsText = newsBody.value;


          var newsObj = {
              'titleText': titleText,
              'newsText': newsText
          };

          if(isOnline()) {
              console.log('online!');
              sendToServer(newsObj);
          } else {
              saveData(newsObj);
              console.log('offline!');
          };

        title.value = '';
        newsBody.value = '';
        title.style.border = '1px solid grey';
        newsBody.style.border = '1px solid grey'

        alert('News submitted!')
    } else {
        if (title.value == '') {
            title.style.border = '1px solid red'
        };
        if (newsBody.value == '') {
            newsBody.style.border = '1px solid red'
        };
    };

};
