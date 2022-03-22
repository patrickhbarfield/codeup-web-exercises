
"use strict"

//Default starting location
let lat = 30.2672;
let lon = -97.7431;

let map = initMap(lon, lat);
getWeatherData(lat, lon)


let marker = getMarker(lon, lat)
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

    marker.togglePopup(); // toggle popup open or closed
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

$("#changeLocation").click(function(e){
    e.preventDefault()
    console.log('Change Location Mapbox Clicked')
    geocode($("#newLocation").val(), MPBX_KEY).then(function(result){
        map.setCenter(result);
        map.setZoom(10);
        /*currentLocation.pop();
        currentLocation.pop();
        currentLocation.unshift(result[1]);
        currentLocation.unshift(result[0]);*/
        console.log(result)
        lat = result[1];
        lon = result[0];
        marker=getMarker(lon, lat);
        $('#forecast').html("");
        $('#locationName').html("");
        getWeatherData(lat, lon);
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
        let html = "<div class='d-flex'>"
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
            <div class="card" style="width: 15rem;">

                <img class="card-img-top" src="http://openweathermap.org/img/w/${dayObject.weather[0].icon}.png" alt="Card image cap">

                <div class="card-body">
                    <h4 class="card-title">${date}</h4>
                    <p class="card-text">Weather</p>
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
