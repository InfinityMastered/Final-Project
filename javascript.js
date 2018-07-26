//b6f0cb12d38fb1510fc6fb510c01a8da
$(document).ready(function () {
    $(".submit").click(function () {
        //Make the API Call
            var city = 33629;
            var apiKey = "b6f0cb12d38fb1510fc6fb510c01a8da";
            var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
            console.log(uri);
            $.get(uri, onRes);
    });
});

function onRes(response) {
//reponse is a variable
console.log(response);
$(".country").html(response.sys.country);
$(".temp").html(response.main.temp);
$(".city-name").html(response.name);
$(".weather").html(response.weather[0].description);
}





// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
