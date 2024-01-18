const apiKey = "799021331d457217f87ff715f53a5cf4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector(".search button")
const searchBox =document.querySelector(".search input")
const weathericon =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity  + " "+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weathericon.src = "images/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value)
})






// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6f92d0245cmshd17c153705408adp152a6djsn9315b1e99c4b',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// const searchBtn = document.querySelector(".search button")
// const searchBox =document.querySelector(".search input")


// async function check(city){
    
        
//         const response = await fetch(url + city , options  );
//         const result = await response.json();
//         // city.innerHTML = cityn;
//          document.querySelector(".city").innerHTML = city;
//          document.querySelector(".temp").innerHTML = result.temp + "°c";
//          document.querySelector(".humidity").innerHTML = result.humidity  + " "+ "%";
//          document.querySelector(".wind").innerHTML = result.wind_speed + " " + "km/h";
//         console.log(result);
    
// }

//  searchBtn.addEventListener("click" , ()=>{
//     check(searchBox.value)
//  })
 

//  check()



