'use strict'

var input = document.getElementById('comment');
var clickButton = document.getElementById('btn');
const commentSection = document.getElementById('app');

var fanCommentText = null
clickButton.onclick = function getText() {

    fanCommentText = input.value;
    if (fanCommentText == '') {
        input.style.border = '1px solid red'

    } else {

        //selecting root element
        var newDiv = document.createElement('div');
        newDiv.className = 'appeal';

        //creating comment text
        var commentText = document.createElement('p');
        commentText.className = 'appeal-text';
        var textNode = document.createTextNode(fanCommentText);
        commentText.appendChild(textNode);
        newDiv.appendChild(commentText);

        //creating username
        var username = document.createElement('h3');
        username.className = 'appeal-username'
        textNode = document.createTextNode('-Username');
        username.appendChild(textNode);
        newDiv.appendChild(username);

        // creating date
        var commentDate = document.createElement('h3')
        commentDate.className = 'appeal-date';
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        var hours = today.getHours();
        var minutes = today.getMinutes();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '.' + dd + '.' + yyyy + ' ' + hours + ':' + minutes;
        textNode = document.createTextNode(today);
        commentDate.appendChild(textNode);
        newDiv.appendChild(commentDate);


        commentSection.appendChild(newDiv);

        input.value = '';
        input.style.border = '1px solid black'
    };
};
