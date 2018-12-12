'use strict';

console.log('this is admin');

function saveNews(obj) {
    addItem('news', obj);

};


// news submission -------------------------------------------------------
var btn = document.getElementById('btn');
var title = document.getElementById('title');
let newsBody = document.getElementById('news');

btn.onclick = function submitNews() {

    if (title.value.trim() != '' &&
        newsBody.value.trim() != '') {

        var titleText = title.value;
        var newsText = newsBody.value;


        var newsObj = {
            'titleText': titleText,
            'newsText': newsText
        };
        saveNews(newsObj);
        if (isOnline()) {
            console.log('online!');
            // sendToServer(newsObj);
        } else {
            // saveNews(newsObj);
            console.log('offline!');
        }
        ;


        title.value = '';
        newsBody.value = '';

        title.style.border = '1px solid grey';
        newsBody.style.border = '1px solid grey'

        alert('News submitted!')
    } else {
        if (title.value.trim() == '') {
            title.style.border = '1px solid red'
        }
        ;

        if (newsBody.value.trim() == '') {
            newsBody.style.border = '1px solid red'
        }
        ;
    }
    ;

};
