//7b4c123850177a48dc2ee0b6299083c6
$(document).ready(function () {
    $(".submit").click(function () {
        //Make the API Call
            var city = $(".city").val();
            var apiKey = "7b4c123850177a48dc2ee0b6299083c6";
            var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
            console.log(uri);
            $.get(uri, onRes);
    });
});

function onRes(response) { //"response is actually a variable, we could name it whatever we want. It just stores what the api sends."
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description)
}