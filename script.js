'use scrict';
let button = document.querySelector('#button-dog');
button.onclick = function () {
    fetch('https://dog.ceo/api/breed/labrador/images/random', { method: 'GET' }).
    then(function(res) {
        return res.json()
    }).then(function(parsedRes) {
        document.body.style.backgroundImage = `url(${parsedRes.message})`;
    })
}