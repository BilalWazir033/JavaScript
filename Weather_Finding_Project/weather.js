const apiKey="665b5a5e8fb0a17487e82d95c70e271e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=peshawar";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
}








git add .
git commit -m "creating a weather finding project using openweathermap api and html,css and javascript. App work by using city name and it will show the weather of that city."
git push -u origin main