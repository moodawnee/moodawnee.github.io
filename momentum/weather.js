const API_KEY = "13925e7a305b04e8c6ed780c6b62474e";

const geoOk = (position)=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].description} / ${data.main.temp} ℃`;
        city.innerText = data.name;
    });
}

const geoErr = ()=>{
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr)