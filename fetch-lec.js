const options = {method: 'GET', headers; {Accept: 'application/json'}};

fetch(https:spi
)
    .then(response => response.json())
    .then(response => sanitizeResponse(response.body))
    .then(sres => renderDailyForecast(sres))
    .catch(err => console.error(err));

function(getSanitizedResponse(dataBody){
    return dataBody.main;
}
 //language=HTML
function renderDailyForecast(forecast){
    // generate DOM nodes and append to DOM
    console.log(forecast);
    $(body).append()
    return
    <div>
        <h3> Temerature Feels Like:</h3>
        <p>${forecast.feels_like}</p>
    </div>;

})

console.log("B");

// separate what you want to do with the data with how you get it