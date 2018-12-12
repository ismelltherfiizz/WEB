'use strict'

var btn = document.getElementById('btn');
console.log(btn);
var title = document.getElementById('title');
console.log(title);
let newsBody = document.getElementById('news');
console.log(newsBody);

console.log('this is admin');




btn.onclick = function submitNews() {
    if (title.value != '' &&
        newsBody.value != '') {
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
