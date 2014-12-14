function ThermostatView(element){
	this.element = $(element);
	this.thermostat = new Thermostat();
	$(this.element).text(this.thermostat.temperature + 'º');
	this.bindTo(".increase_temperature", this.thermostat, this.thermostat.increaseTemperature);
	this.bindTo(".decrease_temperature", this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo(".reset", this.thermostat, this.thermostat.resetTemperature);

	this.bindTo(".powerSaveOn", this.thermostat, this.thermostat.turnPowerSaverOn);
	this.bindTo(".powerSaveOff", this.thermostat, this.thermostat.turnPowerSaverOff);

} 

ThermostatView.prototype.bindTo = function(selector, thermostat, func){
	$(selector).on('click', function() {
		var elementText = $('.temperature h1');
		var elementBg = $('.temperature');
    elementText.text(func.call(thermostat)+ 'º');
    if(parseInt(elementText.text()) < 18){
    	elementBg.css('background-color', 'green');
    	elementBg.css('border', '1px solid green');
    }
    else if(parseInt(elementText.text()) < 25){
    	elementBg.css('background-color', 'yellow');
    	elementBg.css('border', '1px solid yellow');
    }
    else{
    	elementBg.css('background-color', 'red');
    	elementBg.css('border', '1px solid red');
    }
  });
};

ThermostatView.prototype.isPowerOn = function() {
	return this.thermostat.isPowerSaverOn;
};

ThermostatView.prototype.getColor = function() {
	if (this.thermostat.temperature < 25) return 'yellow';
	if (this.thermostat.temperature < 18) return 'green';
	return 'red';
};

$(document).ready(function() {
  window.view = new ThermostatView('.temperature h1');
	$('.temperature').css('background-color', window.view.getColor());
	$('.temperature').css('border', '1px solid ' +window.view.getColor());
  $(".powerSaveOn").prop("checked", window.view.isPowerOn());
  
  $.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data){ 
		$("#currentTemp").text(parseInt(data.list[1].main.temp));
	});
});
