/*Ensures code only runs once DOM  is ready*/
/*
$(document).ready(function () {

    "use strict";

    // GET REQUEST to OpenWeatherMap using city parameter
    // 5 day forecast info
    // https://api.openweathermap.org/data/2.5/forecast

    // Call 5 day / 3 hour forecast data

    function getFiveDayWeather() {
        $.get("https://api.openweathermap.org/data/2.5/forecast",  {
            q: $("#current-city").html().split(": ")[1],
            appid: openWeatherAppId,
            units: "imperial"
        }).done(function (results) {
            let ThreeHourWeather = results.list;   // 5 day / 3 hour forecast data (0:00am, 3:00, 6:00, 9:00, 12:00pm, 3:00pm, 6:00pm, 9:00pm)

            // filter out the weather at 9:00am everyday
            const FiveDayWeather = ThreeHourWeather.filter(weather => weather.dt_txt.split(" ")[1] === "09:00:00");

            for (let i = 0; i < FiveDayWeather.length; i++) {
                const iconcode = FiveDayweather[i].weather[0].icon;
                const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                $(".card-deck .card").eq(i).html(
                    `<h5>${FiveDayWeather[i].dt_txt.split(" ")[0]}</h5>
                    <h6><strong>${FiveDayWeather[i].main.temp_max}/${FiveDayWeather[i].main.temp_min}</strong></h6>
                    <div><img src=${iconurl} alt="Weather icon"></div>
                    <div class="card-body">
                        <ul class="card-text list-group">
                            <li>Description: <strong>${FiveDayWeather[i].weather[0].description}</strong></li>
                            <li>Humidity: <strong>${FiveDayWeather[i].main.humidity}</strong></li>
                            <li>Wind: <strong>${FiveDayWeather[i].wind.speed}</strong></li>
                            <li>Pressure: <strong>${FiveDayWeather[i].main.pressure}</strong></li>
                        </ul>
                    </div>
                </div>`);

                $("h5").addClass("card-title bg-secondary text-light rounded-top");
                $("img").parent().addClass("text-center");
                $("li").addClass("list-group-item");
            }
        });
    }

    let currentWeather = "";
    let defaultWeatherForecast = "";
    function getCurrentWeather(weather) {
        console.log(currentWeather);

        if (currentWeather !== "") {
            currentWeather = "";
        }

        // Display weather icon
        const iconcode = weather.weather[0].icon;
        const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;

        currentWeather =
            `<h6>Current Weather</h6>
            <p class='text-center m-0'><strong>${weather.main.temp_max}/${weather.main.temp_min}</strong></p>
            <div class='text-center'><img id='weather-icon' src=${iconurl} alt='Weather icon'></div>
            <ul class='list-group'>
                <li>Description: <strong>${weather.weather[0].description}</strong></li>
                <li>Humidity: <strong>${weather.main.humidity}</strong></li>
                <li>Wind: <strong>${weather.wind.speed}</strong></li>
                <li>Pressure: <strong>${weather.main.pressure}</strong></li>
            </ul>`;
        $("li").addClass("list-group-item");

        return currentWeather;
    }

    $.get("https://api.openweathermap.org/data/2.5/weather", {
        q: $("#current-city").html().split(": ")[1],
        appid: openWeatherAppId,
        units: "imperial"
    }).done(function (weather) {
        get5DayWeather();
        const displayCurrentWeather = new mapboxgl.Popup()
            .setHTML(getCurrentWeather(weather));

        new mapboxgl.Marker(el)
            .setLngLat([-98.4951, 29.4246])
            .setPopup(displayCurrentWeather)
            .addTo(map);
    });

    defaultWeatherForecast = $(".card-deck").html();
    console.log(defaultWeatherForecast);

    map.on('click', function (e) {
        // Use reverseGeocode to get the location address
        reverseGeocode(e.lngLat, mapboxToken).then(function (results) {
            console.log(results)
            const cityArr = results.split(", ");
            const city = cityArr[cityArr.length - 3];

            // Display current location city name on the search bar
            $("#current-city").html("Current city: " + city);

            // Update the five-day forecast in new location
            getFiveDayWeather();

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: city,
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (results) {
                const displayCurrentWeather = new mapboxgl.Popup()
                    .setHTML(getCurrentWeather(results))
                    .addTo(map);

                new mapboxgl.Marker(el)
                    .setLngLat(e.lngLat)
                    .setPopup(displayCurrentWeather)
                    .addTo(map);
            });
        });

        map.flyTo({
            center: e.lngLat,
            zoom: 15,
            speed: 0.5
        })
    });

    $("#search").click(function (e) {
        e.preventDefault();

        // Get coordinates using goecode & update current city and weather
        geocode($("#place").val(), mapboxToken).then(function (results) {

            // Display current location city name on the navbar
            $("#current-city").html("Current city: " + $("#place").val().charAt(0).toUpperCase() + $("#place").val().slice(1).toLowerCase());  // case insensitive

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: $("#place").val(),
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (weather) {
                var currentWeather = new mapboxgl.Popup()
                    .setHTML(getCurrentWeather(weather));

                new mapboxgl.Marker(el)
                    .setLngLat(results)
                    .setPopup(currentWeather)
                    .addTo(map);
            });

            // fly to the place searched
            map.flyTo({
                center: results,
                zoom: 15,
                speed: 0.5
            });

            // Update the five-day forecast in new location
            getFiveDayWeather();

            $("#place").val("");  // clear input
        });
    });
});

mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// add custom icon to replace the default icon
const el = document.createElement('div');
el.className = 'marker';

$(".card-title").addClass("rounded-top");

$(".dark-mode").click(function () {
    $("body").toggleClass("dark-theme");
    $(".card-header").toggleClass("bg-dark");
    $(".card, li").toggleClass("dark-card");
    $(".h1, h5").toggleClass("dark");
    $("#place").toggleClass("btn-dark dark-input");
    $(".modal-header, .modal-footer").toggleClass("dark-theme");
    $(".modal-body").toggleClass("dark-card");
    $("#x").toggleClass("dark");
    $(".mapboxgl-popup-content").toggleClass("bg-dark");
    if ($("body").hasClass("dark-theme")) {
        map.setStyle("mapbox://styles/mapbox/dark-v10");
    } else {
        map.setStyle("mapbox://styles/mapbox/streets-v11");
    }
});
*/

"use strict"

//Default starting location
let startingLat = 30.2672;
let startingLon = -97.7431;

let map = initMap(startingLon, startingLat);
getWeatherData(startingLat, startingLon)



let marker = getMarker(startingLon, startingLat)
setMapClickEvent()
//update both weather and map once ou recieve user-input - just need the lat long to update weather cards.  Marker/userinput
//style, marker on map, user input, kiss get WeatherData, update map. updatemapfunction that centers at. unless u are using geocoder
//Function to create map
function initMap(lon, lat) {
    mapboxgl.accessToken = MPBX_KEY;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        maxZoom: 12,
        minZoom: 5,
        zoom: 10,
        center: [lon, lat]
    });
}

function getMarker(lon, lat){
    return new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .setPopup(new mapboxgl.Popup().setHTML("How's the weather here?"))
        .addTo(map);

/*    marker.togglePopup(); // toggle popup open or closed*/
}
function setMapClickEvent(){
    map.on("click",function (e){
        console.log(e);
        if(marker){
            marker.remove()
        }
        marker = getMarker(e.lngLat.lng, e.lngLat.lat)
        getWeatherData(e.lngLat.lat, e.lngLat.lng)
    })
}

$("#changeLocation").click(function(){
    console.log('Change Location Mapbox Clicked')
    geocode($("#newLocation").val(), MAP_key).then(function(result){
        map.setCenter(result);
        map.setZoom(10);
        currentLocation.pop();
        currentLocation.pop();
        currentLocation.unshift(result[1]);
        currentLocation.unshift(result[0]);
        lat = currentLocation[1];
        lon = currentLocation[0];
        marker=createMarker({lat, lon});
        $('#forecast').html("");
        $('#locationName').html("");
        getData(lat, lon);
    })
});
//getWeatherData uses a lat and long to get weather data
    function getWeatherData(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&lang=sp&moonrise&appid=${OWM_KEY}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                console.log(getCurrentWeather(data))
                $("#weather").html(getWeatherCardContainer(data.daily))
            })
    }

//returning weather data for only the "current" property of the weather data object
    function getCurrentWeather(fullResponse) {
        return fullResponse.current
    }

    function getWeatherCardContainer(dayArray) {
        let html = "<div>"
        for (let i = 0; i < 5; i++) {
            html += getWeatherCard(dayArray[i])
        }
        html += "</div>"
        return html
    }

//returns html template for one weather card
//language=HTML
    function getWeatherCard(dayObject) {
        let date = new Date(dayObject.dt * 1000).toISOString().split("T")[0]
        return `
            <div class="card" style="width: 18rem;">

                <img class="card-img-top" src="http://openweathermap.org/img/w/${dayObject.weather[0].icon}.png" alt="Card image cap">

                <div class="card-body">
                    <h4 class="card-title">${date}</h4>
                    <p class="card-text">Some quick example text</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Currently</b>: ${dayObject.weather[0].main}</li>
                    <li class="list-group-item"><b>Temp:</b> ${dayObject.temp.day + " F"}</li>
                    <li class="list-group-item"><b>Dewpoint:</b> ${dayObject.humidity}</li>
                    <li class="list-group-item"><b>Wind:</b>${dayObject.wind_speed + " kts @ " + dayObject.wind_deg + " degs"}</li>
                    <li class="list-group-item"><b>Pressure:</b> ${dayObject.pressure + " bars"}</li>
                </ul>
<!--                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>-->
            </div>`
    }
