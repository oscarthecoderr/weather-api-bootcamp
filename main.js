//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
const apiKey = '60965920fc34fc9095a34f849517505a'
document.querySelector('button').addEventListener('click',fahrenheit);

function fahrenheit(){
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    let lat = data[0].lat
    let lon = data[0].lon
    
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      document.querySelector('h2').innerText = data.main.temp

    })
  })
}