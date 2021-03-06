// Separate API key
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?"; 
let lat = "lat=30.266666&"; 
let lon = "lon=-97.733330&"; 
let apiOptions = "units=imperial&exclude=minutely,alerts&";
let apiKey = "appid=dc2c6c767a3bc108510c5151248c8456"; 
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
.then((response) => response.json()) 
.then((data) => {

    // Weather main data
    let main = data.current.weather[0].main; 
    let description = data.current.weather[0].description;
    description = titleCase(description); 
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity; 

    document.getElementById('today').innerHTML = description;
    console.log(data);
    console.log(data.daily[0].temp.max);
    document.getElementById('weather').innerHTML = temp + ' °F';
    document.getElementById('high').innerHTML = Math.round(data.daily[0].temp.max);
    document.getElementById('low').innerHTML = Math.round(data.daily[0].temp.min);



    // Weather hourly data 
    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].tmep; 
    let hour2 = data.hourly[2].tmep; 
    let hour3 = data.hourly[3].tmep; 
    let hour4 = data.hourly[4].tmep; 
    let hour5 = data.hourly[5].tmep; 

    // Weather daily data
    let tomorrowTemp = Math.round(data.daily[0].temp.day);
    let dayAfterTomorrow = Math.round(data.daily[1].temp.day)
    let tomorrowMain = data.daily[0].weather[0].main; 
    let dayAfterTomorrowMain = data.daily[1].weather[0].main; 

     console.log(temp); 

     function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
      titleCase("I'm a little tea pot");
})