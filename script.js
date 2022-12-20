let weather ={
    "apikey" : "5e5bf02cf58e0e95629524f6fbe1ff0a",
    
    fetchweather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+this.apikey+"&units=metric"
        ).then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } =data;
        const {icon,description} =data.weather[0];
        const { temp, humidity} =data.main;
        const {speed} =data.wind;
        const {lat,lon} =data.coord;
        
        
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".icon").src ="http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText=temp+ "ºc";
        document.querySelector(".humidity").innerText ="Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText ="wind speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')"
        document.querySelector(".latitude").innerText="latitude : "+ lat;
        document.querySelector(".longitude").innerText="longitude : "+lon;

    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key=="Enter"){
        weather.search();
    }
});

weather.fetchweather("visakhapatnam");