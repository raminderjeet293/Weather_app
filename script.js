const apiKey="f1e34a958052a48a7b548634e8ad7ebe";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) //fetch weather data
{
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);//request send with city name and apikey

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/Mist.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    }
 
}

searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value);
})
