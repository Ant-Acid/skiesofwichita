document.querySelector('button').addEventListener('click', getFetch)
//todo use input to receive location data, use geocoding (https://openweathermap.org/api/geocoding-api) api to return correct location, inject that geocode into fetch weather call
function getFetch() {
	const choice = document.querySelector('input').value
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.686020&lon=-97.335571&appid=868e4662a995d254b9c68602f1998abe&units=imperial`)
		.then(res => res.json())

		.then(data => {
			console.log(data)
			// document.querySelector('#alerts1').innerText = data.alerts[0].event
			// document.querySelector('#alerts2').innerText = data.alerts[1].event// if less than two alerts, broken
			// document.querySelector('#alerts3').innerText = data.alerts[2].event

			document.querySelector('#skyConditions').innerText = data.current.weather[0].description //?capitalize first letter. How to add rest of word back?
			// document.querySelector('img').src = data.drinks[0].strDrinkThumb
			document.querySelector('#temp').innerText = data.current.temp + " °f"
			document.querySelector('#humidity').innerText = data.current.humidity + "% Humidity"
			document.querySelector('#wind').innerText = data.current.wind_speed + " mph"
		})
	// .catch(err => console.error(err));
}


