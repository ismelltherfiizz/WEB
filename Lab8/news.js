'use strict'
var news = null

function isOnline() {
    return window.navigator.onLine;
};
window.addEventListener('load', function() {
  console.log('news');


    if (isOnline()){
      console.log('online')
        news = JSON.parse(localStorage.getItem('news'));
        var parent = this.document.querySelector('.last-news .row');
        var newArticle = createNewsInstance(news);
        parent.appendChild(newArticle)
}
else {
  console.log('offline')
}

});
function createNewsInstance(news) {
  console.log('news loaded');
  if (localStorage.getItem('news') === null) {
      console.log('no item to load')
    }
    else   //if (isOnline()) {
              console.log('is online');



    var bootstrapWrapper = document.createElement('div');
    bootstrapWrapper.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12');

    // creating root element
    var newDiv = document.createElement('div');
    newDiv.className = 'news-instance';

    // creating div for the image
    var imgDiv = document.createElement('div');
    imgDiv.className = 'news-image';
    // creating image
    var img = document.createElement('img');
    img.src = 'image.png';  
    // adding img to img-div
    imgDiv.appendChild(img);
    newDiv.appendChild(imgDiv);
    // creating header
    var header = document.createElement('h2');
    var txtNode = document.createTextNode(news.titleText);
    header.appendChild(txtNode);
    newDiv.appendChild(header);
    // creating news txt
    var newsText = document.createElement('p');
    txtNode = document.createTextNode(news.newsText);
    newsText.appendChild(txtNode);
    newDiv.appendChild(newsText);

    bootstrapWrapper.appendChild(newDiv);

    return bootstrapWrapper;
//    }
};
