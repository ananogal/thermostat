$(document).ready(function(){
	var thermostat = new Thermostat();
	$(".temperature h1").text(thermostat.temperature);
	$(".powerSaveOn").attr('checked', 'checked');


	$(".increase_temperature").on('click', function(){
		$(".temperature h1").text(thermostat.increaseTemperature());
	});

	$(".decrease_temperature").on('click', function(){
		$(".temperature h1").text(thermostat.decreaseTemperature());
	});

	$(".reset").on('click', function(){
		$(".temperature h1").text(thermostat.reset());
	});

	$('.powerSaveOn').on("click", function(){
			thermostat.turnPowerSaverOn();
			$(".temperature h1").text(thermostat.temperature);
	});

	$('.powerSaveOff').on("click", function() {
		thermostat.turnPowerSaverOff();
	});

	$.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data){ 
		$("#currentTemp").text(data['list'][1]["main"]["temp"]);
	});
});
