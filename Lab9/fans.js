
'use strict'
function isOnline() {
    return window.navigator.onLine;
};

var fans = {};

var input = document.getElementById('comment');
var clickButton = document.getElementById('btn');
const commentSection = document.getElementById('app');

function comment(commentTxt) {
  console.log('on click happened');
    fanCommentText = input.value;
    if (commentTxt === null) {
        console.log('commentTxt == null');
        var fanCommentText = input.value;
    } else {
        console.log('commentTxt != null');
        var fanCommentText = commentTxt
    };
    if (fanCommentText === '') {
      console.log('invalid text');
        input.style.border = '1px solid red'

    } else {
      if (isOnline()) {
          console.log('is online');
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
      } else {
          console.log('save data');
          processFans(fanCommentText);
      };
        input.value = '';
        input.style.border = '1px solid black'
    };
};

    //window.addEventListener('online',  updateOnlineStatus);
  //  window.addEventListener('offline', updateOnlineStatus);

function processFans(fansToSend) {
    if(isOnline()) {
        if (arguments.length === 0) {
            fans = getItem('fans', function (callbackFans) {
                processFans(callbackFans);
                deleteItem('fans');
            });

            if (fans == undefined) {
                return
            } else {
               comment(fans);
               deleteItem('fans');
            }
        } else {
            comment(fansToSend);
        }

    } else {

        addItem('fans', fansToSend);
    }
}
processFans();
