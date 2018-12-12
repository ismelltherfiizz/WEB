'use strict'
function saveNews(obj) {
    if(isOnline()) {

    } else {
        addItem('news', obj);
    }
};


function isOnline() {
    return window.navigator.onLine;
}


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


          saveNews(newsObj);


        title.value = '';
        newsBody.value = '';
        title.style.border = '1px solid grey';
        newsBody.style.border = '1px solid grey'

        alert('News submitted!')
    }

     else {
        if (title.value == '') {
            title.style.border = '1px solid red'
        };
        if (newsBody.value == '') {
            newsBody.style.border = '1px solid red'
        };
    };

};
