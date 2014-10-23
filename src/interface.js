$(document).ready(function(){
	var thermostat = new Thermostat();
	$(".temperature h1").text(thermostat.temperature);

	$(".increase_temperature").on('click', function(){
		$(".temperature h1").text(thermostat.increaseTemperature());
	});

	$(".decrease_temperature").on('click', function(){
		$(".temperature h1").text(thermostat.decreaseTemperature());
	});
});
