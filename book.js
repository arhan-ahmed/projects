
var ele = document.querySelectorAll("i"); //first element which has found
ele.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    var image = document.querySelector("img");
    var source = image.src;
    source = source.substring(source.lastIndexOf("0") + 1);
    
    
    if (source == "/images/2book.jpg") {
      image.src = "./images/boosum-background.jpg";
    } else {
      image.src = "./images/2book.jpg";
    }
  });
});
//changes the image
 setTimeout(() => {
         var image = document.querySelector("img");
          var source = image.src;
          source = source.substring(source.lastIndexOf("0") + 1);
          
          
          if (source == "/images/2book.jpg") {
            image.src = "./images/boosum-background.jpg";
          } else {
            image.src = "./images/2book.jpg";
          }
      }, 3000);
      
var date = new Date();
var dele = document.querySelector(".date");
var year = date.getFullYear();

dele.innerHTML = `<h3>${year}</h3>`;

//adding genrate btn feautres
var btn = document.querySelector("#btn");

btn.addEventListener('click',()=>{
  let inputtitle = document.querySelector("#title").value;
  document.querySelector(".bookDes").textContent = "generating the summary.."
  setTimeout(() => {
    getSummary(inputtitle);
  }, 5000);
 

})
//adding the description
function getSummary(title){
//Replace YOUR_API_KEY with the API Key from Google Cloud Console
const apiKey = 'AIzaSyBzy52GQwqrvDQ28fZqcR5oQ_WaSS6lPUc';
const query = title; // You can change this to any search query (title, author, etc.)

// Create the API endpoint URL
const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

// Fetch data from Google Books API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    const arr = Array.from(data.items);
    
    var title = arr[2].volumeInfo.title;
    var des = arr[2].volumeInfo.description;
    var image = arr[2].volumeInfo.imageLinks.smallThumbnail;
    //console.log(heading);
    console.log(title);
    console.log(des);
    console.log(image);
    //title
    var ele = document.querySelector(".bookName");
    ele.innerText = title;
    //description
    var descr = document.querySelector(".bookDes");
    descr.innerText = des;
    //image
    var photo = document.querySelector(".bookPhoto");
    photo.style = "display:block;"
    photo.src = image;
  })
  .catch(error => {
    console.error('Error fetching book data:', error);
  });
}



