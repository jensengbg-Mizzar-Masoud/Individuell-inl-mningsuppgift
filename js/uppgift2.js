const textInput = document.querySelector('.input');
const numberofpage= document.querySelector('.numberofpage');
const button = document.querySelector ('button');
const myDiv = document.querySelector('#photodiv');
const Api= 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=88aa7bf2c1cf50d2d92e740a15bf85de&text=&format=json&nojsoncallback=1&api_sig=edb934afbb21deb3785727a34d080f8f';
let newDivJs = document.querySelector('#newDiv');
let newDivImgJs = document.querySelector('#newDivImg');
let closeButton = document.querySelector('.closeButton');



button.addEventListener('click', function (){
    
    let userSearch = textInput.value;

    let numberofpagetosearch = numberofpage.value; 

    let webbSearch =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=88aa7bf2c1cf50d2d92e740a15bf85de&text=${userSearch}&per_page=${numberofpagetosearch}&format=json&nojsoncallback=1`

    fetch(webbSearch, {method: 'GET'})

    .then (function (respons){

        return respons.json();

    })
    .then ( function (data){
        createUrl(data)
    })
    .catch ( function (error){
        console.log(error);
    })
});




function createUrl (data) {

    let imgs = data.photos.photo;
    
    myDiv.innerHTML = '';
 
     
     imgs.forEach( function (img){
    
     let farmId= img.farm;
     
     let serverId = img.server;

     let id = img.id;

     let secret = img.secret;

     const imgUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
     
         
     displayImg(imgUrl);
     });

     
}

function displayImg(imgUrl){

  let imgtag = `<img src="${imgUrl}">`;
   
  myDiv.innerHTML += imgtag ;

  let allImgTag = document.querySelectorAll('img');

  allImgTag.forEach(function(img){

    img.addEventListener('click', function (event) {onclickfunction (event)} );

  });

}

function onclickfunction(event) {
    let img = event.target;

    newDivJs.classList.add('view');
    newDivImgJs.src = img.src;

};

closeButton.addEventListener('click',function (event){

    let target = event.target ;
    if(target == this ){
        newDivJs.classList.remove('view');
    }
})







