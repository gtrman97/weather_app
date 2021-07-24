// Separate API key
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?"; 
let lat = "lat=30.266666&"; 
let lon = "lon=-97.733330&"; 
let apiOptions = "exclude=minutely,alerts&";
let apiKey = "appid=dc2c6c767a3bc108510c5151248c8456"; 
let file = queryUrl + lat + lon + apiOptions + apiKey;