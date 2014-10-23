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

});
