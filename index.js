const dateTag = document.querySelector('span');
// const date = new Date();
// dateTag.textContent = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
const date = moment().format('MMM Do YYYY');
dateTag.textContent = date;


//attempt to do an GET request in Vanilla Javascript using XMLHttpRequest(); CORS error 
// https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/
// const Http = new XMLHttpRequest();
// const url2 = 'https://samples.openweathermap.org/data/2.5/weather?q=Allen&appid=8b445f70f1c81993c04e0ca0b5025ae1'

// Http.open("GET", url2);
// Http.send();

// Http.onreadystatechange = e => {
//     console.log(Http.responseText);
// }


